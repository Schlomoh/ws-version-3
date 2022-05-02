interface GistJsonResponse {
  files: string[];
}

interface IFileObject {
  [key: string]: string;
}

async function loadGist(id: string) {
  const url = `https://gist.githubusercontent.com/Schlomoh/${id}`;
  try {
    const jsonResponse = await fetch(`${url}.json`);
    const jsonData = await (jsonResponse.json() as Promise<GistJsonResponse>);

    const data = await Promise.all(
      jsonData.files.map((file) =>
        fetch(`${url}/raw/${file}`).then((r) => r.text())
      )
    );

    const fileObj = {} as IFileObject;
    jsonData.files.forEach((fileName, index) => {
      fileObj[fileName] = data[index];
    });

    return fileObj;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export const getGist = (gists: IFileObject, i: string) => {
  return gists !== null ? gists[i] : "Code was not available.";
};

export default loadGist;
