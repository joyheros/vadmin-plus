import { defineMock } from "./base";

export default defineMock([
  {
    url: "/api/v1/files",
    method: ["POST"],
    body({}) {
      return {
        code: 200,
        data: null,
        msg: "文件上传成功",
      };
    },
  },
  {
    url: "/api/v1/files",
    method: ["DELETE"],
    body({ params }) {
      return {
        code: 200,
        data: null,
        msg: "删除文件" + params.filePath + "成功",
      };
    },
  },
]);

