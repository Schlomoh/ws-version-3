import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import image from "../../../assets/img/wave-surface.jpg";
import gltfUsdz from "../../../assets/img/gltfUsdz.jpg";

import {
  ArticleImage,
  BaseProjectPage,
  CodeExample,
  getGist,
  loadGist,
  PaddingContainer,
} from "../../../components";

export const usdzConversionContent = {
  title: "USDZ converter.",
  subTitle: "GLB to USDZ conversion using Docker.",
  image: image,
  link: "/projects/usdzConverter",
  githubSource: "https://github.com/Schlomoh/usdz-converter",
};

const content = usdzConversionContent;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      gists: await loadGist("65a12144313254e205eedfe58d76087b"),
    },
  };
};

const UsdzConversion = ({
  gists,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BaseProjectPage>
      <PaddingContainer>
        <h3>Python pipeline for converting glTF files to the USDZ format.</h3>
        <h2>Overview.</h2>
        <p>
          GlTF files have been around for some time and have a variety of
          applications in various fields. However, there is no standard way to
          convert them into the USDZ format, the new file type Apple introduced
          with iOS 12 and ARKit 2.0.
        </p>
        <p>
          I will describe my experience creating a Python pipeline that converts
          glTF files to USDZ format using a Docker container. It aims to outline
          what difficulties I encountered and how I overcame them. Additionally,
          after reading this, you should feel able to understand, maybe improve
          or even develop your own approach in some way.
        </p>
        <p>
          If you are already familiar with both file formats, you can skip the
          following section and jump directly into the pipeline implementation.
        </p>
        <ArticleImage>
          <Image src={gltfUsdz} alt=""></Image>
        </ArticleImage>
        <h2>The two file types.</h2>
        <h4>GLTF.</h4>
        <p>
          GLTF was introduced by the Khronos Group as the WebGL Transition
          Format (WebGL TF) and released in 2015. After evolving into the glTF
          2.0 specification in 2017, support for the format grew steadily.
          Colloquially called the JPEG of 3D files, it allows for efficient
          representation of 3D data and quickly became a widely used file
          format.
        </p>
        <p>
          Keep in mind the distinction between the ".gltf" and ".glb" files.
          Former consists of the actual ".gltf" file formatted in JSON, a
          directory containing the associated textures and a ".bin" file that
          describes the geometry. <br />
          While the ".glb" file is the composition of the components mentioned
          above and stands for the binary format of the specification.
        </p>
        <h4>USDZ.</h4>
        <p>
          Apple's USDZ format is a proprietary evolution of the original USD
          (Universal Scene Description) format developed by Disney. It is a
          compressed or zipped version of its ancestor and utilized for all 3D
          content on Apple devices powered by AR Kit.
        </p>
        <h4>The Problem.</h4>
        <p>
          USDZ files are (almost) only compatible with Apple devices and
          software. So the first difficulty as a non-IOS or OSX user already
          consists of opening and testing files. Conversely, glTF files cannot
          natively be opened and displayed on an Apple device without either
          having an app installed specifically for that purpose or using a web
          application with said capability.
        </p>
        <h2>My approach.</h2>
        <p>
          Initially, my approach to converting glTF to USDZ was to use the
          "USD-from_gltf" utility published by Google to get a USD file as an
          intermediate stage. I then wanted to "package" this into a USDZ file
          using the USD Toolkit developed by Pixar Animation Studios using its
          usdzip tool.
          <br />
          However, setting up the USD toolkit is first error-prone and
          additionally packed with functionalities for which I had no use.
          Therefore this idea soon turned out to be not very pragmatic.
          <br />
          Besides,"usd_from_gltf" is itself able to generate “.usdz” files, so
          the hassle of setting up Pixar's toolkit was not necessary in the
          first place…
        </p>
        <p>
          Trying out various libraries and online tools, I finally came across a
          Docker image called "plattar/python-xrutils". Since not only Google's
          "usd_from_gltf" but many other useful libraries and toolkits were made
          available here, I ultimately decided to pursue this approach.
        </p>

        <h2>The implementation.</h2>
        <p>
          The script should of course be testable directly via the CLI, and in
          my case be integrated into a Django Python back-end afterwards. This
          requires four things to be taken care of:
        </p>
        <ol>
          <li>
            <p>The handling of command line arguments</p>
          </li>
          <li>
            <p>Providing the converter as a reusable Python module</p>
          </li>
          <li>
            <p>The automatic fetching of the Docker image</p>
          </li>
          <li>
            <p>
              A way for providing the files to be converted inside the docker
              container
            </p>
          </li>
        </ol>

        <h4>The setup</h4>
        <p>
          I use Microsoft's VS Code as my IDE and Pyenv to manage my Python
          versions. To create an isolated project that places all libraries
          within its own directory, versus a global installation of
          dependencies, run the following command:
        </p>
        <CodeExample lang="shell" code="python -m venv ." />
        <p>
          This command runs Python and instructs the module "venv" (i.e. virtual
          environment) to run, which with the specification "." creates a
          virtual environment in the current working directory. After that I can
          use the following command to start the environment:
        </p>
        <CodeExample lang="shell" code=". ./bin/activate" />
        <p>
          To deactivate this environment just type "deactivate" into the CLI.
          After that I install Docker as a dependency with the command:
        </p>
        <CodeExample lang="shell" code="pip install docker" />
        <p>
          Now the development environment is set up and we can start writing the
          actual code.
        </p>
        <h2>The code</h2>
        <p>
          At first I create the file "main.py" and take care of handling the CLI
          arguments. For this I use the Python module "argparse". I decided on
          three arguments that can be used to configure the converter:
        </p>
        <ul>
          <li>
            <p>Input (optional)- To define the input files</p>
          </li>
          <li>
            <p>Output (optional) - where to put the converted files</p>
          </li>
          <li>
            <p>
              Read dir recursive (optional) - if sub-folders should be read as
              well, once a directory has been defined as input
            </p>
          </li>
        </ul>
        <p>
          The arguments are marked as optional because they are set to a default
          value to ease the testing process by not having to define the paths
          manually.
        </p>
        <p>
          At first I define the function "main", which is invoked when the
          "main.py" script is executed via the CLI. This function mainly takes
          care of receiving the arguments and shall then call the converter with
          them.
        </p>
        <CodeExample lang="python" code={getGist(gists, "main.py")} />
        <p>
          To validate the input and output values, I define the function
          "check_io", which checks if the input path exists and the output
          folder has already been created. For this the "arguments" object is
          passed into the function, where the necessary values are then
          accessed. If one of the paths does not exist, an error is thrown at
          the input or the output folder is created if it has not yet been
          created. If everything is valid the function returns "True" and we can
          continue.
        </p>
        <CodeExample lang="python" code={getGist(gists, "check_io.py")} />
        <p>
          After that input, output and recursive (read_dir_recursive) can be
          used and we can start writing the docker util.
          <br />
          For this I create the file "docker_util.py" and start with the
          function "list_files", which takes the two values "input" and
          "recursive" to return a list of input files. This function shall check
          if the input is a single file or a directory.
          <br />
          For all path operations I use the python module "os.path" which has to
          be imported first.
        </p>
        <p>
          If the input is already the path of a single file, the path is simply
          put into an array and returned afterwards. However, in case of a
          directory, another python module called "glob" is used. This provides
          a simple way to read directories and get a list of file paths from all
          files that match a certain pattern. Here the argument "recursive" is
          used to tell "glob" to also read the sub-folders if requested. Then
          the list of file paths is returned.
        </p>
        <CodeExample lang="python" code={getGist(gists, "list_files.py")} />
        <p>
          Now the actual "Docker_util" can be taken care of. For this I create a
          class, which will contain all necessary values and methods. To start
          with, it is necessary to import the docker library.
          <br />
          To provide centralized access to important values like the image name,
          the release, as well as in- and output paths within the docker
          container, I define them directly at the beginning of my new class. I
          also create a variable named "instance", which connects to the Docker
          instance running on the host using the "docker.from_env()" method.
          <br />
          Now I can define the so-called constructor of the class, which
          provides values across methods within the "self" variable. These
          values are set when the class is initiated in the "main" function, and
          once again we are talking about the "input", "output" and "recursive"
          variables.
        </p>
        <CodeExample
          lang="python"
          code={getGist(gists, "docker_util_var_construct.py")}
        />
        <p>
          Now we have to check if the image "Plattar/python-xrutils" is already
          present and if not, download it from the docker-hub. Here I can access
          the already created "instance" variable and list the available images
          named "plattar/python-xrutils". In case a list is returned which is
          longer than 0, the available image is retrieved, otherwise it is
          downloaded using the "pull" method and then returned.
        </p>
        <CodeExample
          lang="python"
          code={getGist(gists, "get_image_method.py")}
        />
        <p>
          With this, three of the four important items of our checklist are
          already fulfilled. Yay.
        </p>
        <p>
          As the last important point (besides the actual conversion of course)
          we still have to take care of providing the files inside the
          container. For this we create the following method called
          "bind_volume". At the same time many path operations are necessary
          now, which are stored for reuse in another file called
          "path_operations.py". This is where I also put the "check_io"
          function.
          <br />
          First I want to get the absolute paths of the input and output paths
          in the "bind_volume" method to prevent possible errors when running
          the converter. Also the "get_absolute_path" function removes a
          possible file at the end of the input path.
        </p>
        <p>Now this is the full "path_operations.py" file:</p>
        <CodeExample
          lang="python"
          code={getGist(gists, "full_path_operations.py")}
        />
        <p>
          Now I use these paths and the docker paths defined at the beginning of
          the class to connect the in- and output host paths to the locations
          accessible in the docker container. For this, the python docker api
          needs an object that represents this connection accordingly. This
          object can now be inserted into the "docker.containers.run()".
          Additionally I set the "tty" flag, which ensures that the container is
          not stopped right after it is executed. I also set the "detach" flag
          to run the container in the background.
          <br />
          All together this results in the following code for the "bind_volume"
          method:
        </p>
        <CodeExample
          lang="python"
          code={getGist(gists, "bind_volume_method.py")}
        />
        <p>
          Now to execute the command which starts the "usd_from_gltf" tool
          inside the container, I define the method "call_converter". (almost
          done hehe)
          <br />
          This method will iterate over the list of input paths and therefore
          accepts only one parameter, a string pointing to a ".gltf" input file.
          <br />
          At the beginning of the function, I define a little helper function
          called "create_args", which uses two more functions to generate the
          input and output filenames for inside the docker container.
          <br />
          First the function "new_file_path" and then "change_extension", where
          the first one appends a filename to a new path and the second one
          replaces one file extension with another. These functions are also
          added to the "path_operations.py" file.
          <br />I now use the "create_args" function to create the input and
          output arguments for the command that will be executed inside the
          running Docker container.
        </p>
        <CodeExample
          lang="python"
          code={getGist(gists, "call_converter_method.py")}
        />
        <p>
          And now, to tie everything together, two final methods are defined:
          The "stop" and "start" methods. The "stop" method is only two lines
          long and invokes first the "docker.containers.kill()" method of our
          docker instance and then the "docker.containers.remove()" method. This
          then removes the container created at the beginning, including volumes
          (i.e. the connection for the file exchange).
        </p>
        <CodeExample lang="python" code={getGist(gists, "stop_method.py")} />
        <p>
          The "start" method now simply calls all previously defined methods one
          after the other, then iterates through the list of input files with
          the "call_converter" method and catches potential errors. Last but not
          least, in case of an error as well as after finishing the conversion,
          our little "stop" method is called.
        </p>
        <CodeExample lang="python" code={getGist(gists, "start_method.py")} />
        <p>Here is the full "docker_util.py" code for you:</p>
        <CodeExample
          lang="python"
          code={getGist(gists, "full_docker_util.py")}
        />
        <p>
          All that is missing now is to import this new class, initialize it in
          our "main" function with the input and output values from the CLI
          arguments and then call the "start" method.
        </p>
        <CodeExample lang="python" code={getGist(gists, "full_main.py")} />
        <p>
          And that's it! Now we have a converter that can convert any glTF 2.0
          file into the USDZ format. This class can now be used in other
          projects, e.g. to extend a larger 3D pipeline or to make an online
          tool out of it.
        </p>
        <p>
          With this I hope I was able to help you if you are currently working
          on such a project, or maybe I just gave you some ideas. Regardless,
          I'd love to hear your feedback and hear what you thought of this
          article.
        </p>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default UsdzConversion;
