interface GistJsonResponse {
  files: string[];
}

interface IFileObject {
  [key: string]: string;
}

async function loadGist(id: string) {
  const url = `https://gist.githubusercontent.com/Schlomoh/${id}`;
  const jsonResponse = await fetch(`${url}.json`);
  const jsonData = await (jsonResponse.json() as Promise<GistJsonResponse>);

  const data = await Promise.all(
    jsonData.files.map((file) =>
      fetch(`${url}/raw/${file}`).then((r) => r.text())
    )
  );

  const fileObj = {} as IFileObject;
  jsonData.files.forEach((fileName, index) => {
    fileObj[fileName] = data[index].toString();
  });

  return fileObj;
}

export default loadGist;
