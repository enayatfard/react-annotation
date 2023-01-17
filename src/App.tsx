import { useState } from "react";
import Toolbox from "./components/Toolbox";

function App() {
  const [position, setPosition]: any = useState();
  const [showbox, setShowbox] = useState(false);

  function handleOnMouseUp() {
    const selection = window.getSelection();
    const selectedText = selection?.toString()?.trim();

    selectedText ? setShowbox(true) : setShowbox(false);

    const selectionRange: any = selection?.getRangeAt(0);
    const { x, y, width } = selectionRange?.getBoundingClientRect();

    setPosition({ x: x + width / 2, y: y + window.scrollY + 20 });
  }

  return (
    <div className="p-10">
      <Toolbox />
      {showbox ? (
        <div
          className="absolute"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          <textarea
            placeholder="type somthing..."
            className="bg-gray-100 top-10 border-gray-300 w-64 h-28 placeholder:text-xs p-2 resize-none rounded-md"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 absolute right-3 bottom-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      ) : null}
      <p onMouseUp={handleOnMouseUp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
        porta lorem mollis. Morbi tristique senectus et netus. Mattis
        pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et
        molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
        ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at
        consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
        enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et
        molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.
        Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim
        blandit volutpat maecenas volutpat. Ornare lectus sit amet est plcumsan
        in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
        scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
        mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
        tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
        sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
        ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae
        suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
        viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
        Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est plcumsan in nisl nisi. Arcu cursus vitacumsan
        in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
        scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
        mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
        tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
        sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
        ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae
        suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
        viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
        Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est plcumsan in nisl nisi. Arcu cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
        imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus
        et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
        Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
        Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus
        mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
        suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi
        est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est plcumsan in nisl nisi. Arcu cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
        imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus
        et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
        Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
        Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus
        mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
        suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi
        est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est plcumsan in nisl nisi. Arcu cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
        imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus
        et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
        Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
        Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus
        mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
        suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi
        est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est ple congue mauris rhoncus aenean vel elit
        scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
        mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
        tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
        sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
        ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae
        suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
        viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
        Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est plcumsan in nisl nisi. Arcu cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
        imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus
        et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
        Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
        Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus
        mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
        suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi
        est sit amet facilisis magna. Dignissim diam quis enim lobortis
        scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat.
        Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
        tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
        turpis tincidunt id aliquet.
      </p>
    </div>
  );
}

export default App;
