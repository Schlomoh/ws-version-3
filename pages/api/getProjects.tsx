import fs from "fs/promises";
import path from "path";

export const createProjectListing = async (req: any, res: any) => {
  const projectPath = path.resolve("../public");
  try {
    const files = await fs.readdir(projectPath);
    console.log();
    for (const file of files) {
      console.log(file);
    }
    res.statusCode = 200
    res.json(files);
  } catch (e) {
    console.log(e);
    res.statusCode = 500
    res.json({})
  }
};

export default createProjectListing;
