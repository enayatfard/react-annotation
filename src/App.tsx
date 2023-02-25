import { dataMap } from "./constants/data";

function App() {
  function makeItTag(data: any) {
    let tag = "";

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      tag += `<${item.tag} class="${item?.class || ""}">${item?.body || ""}${
        item?.children ? makeItTag(item?.children) : ""
      }</${item.tag}>`;
    }

    return tag;
  }

  return <div dangerouslySetInnerHTML={{ __html: makeItTag(dataMap) }} />;
}

export default App;
