import * as React from "react";
import { useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { ChromePicker, SketchPicker } from "react-color";
import "rc-tooltip/assets/bootstrap.css";

const popover = {
  position: "absolute",
  zIndex: "2",
};
const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};

import {
  Undo as UndoIcon,
  Redo as RedoIcon,
  Trash as TrashIcon,
  Brush as BrushIcon,
  Eraser as EraserIcon,
  Pencil as PencilIcon,
  Palette as PaletteIcon,
  XSquare as XSquareIcon,
} from "lucide-react";

export default function Canvas({
  startingPaths,
  onScribble,
  scribbleExists,
  setScribbleExists,
}) {
  const canvasRef = React.useRef(null);

  const [cursor, setCursor] = React.useState("cursor-pencil");
  const [stroke, setStroke] = React.useState(3);
  const [color, setColor] = React.useState("#000000");
  const [displayPicker, setDisplayPicker] = React.useState(false);

  useEffect(() => {
    loadStartingPaths();
  }, []);

  useEffect(() => {
    console.log(displayPicker);
  }, [displayPicker]);
  const handleColorPicker = () => {
    setDisplayPicker(!displayPicker);
  };
  const handleClosePicker = () => {
    setDisplayPicker(false);
  };

  async function loadStartingPaths() {
    await canvasRef.current.loadPaths(startingPaths);
    setScribbleExists(true);
    onChange();
  }

  const onChange = async () => {
    const paths = await canvasRef.current.exportPaths();
    localStorage.setItem("paths", JSON.stringify(paths, null, 2));
    if (!paths.length) return;
    setScribbleExists(true);
    const data = await canvasRef.current.exportImage("png");
    onScribble(data);
  };

  const undo = () => {
    canvasRef.current.undo();
  };
  const redo = () => {
    canvasRef.current.redo();
  };
  const reset = () => {
    setScribbleExists(false);
    canvasRef.current.resetCanvas();
  };
  const brush = () => {
    setStroke(7);
    setCursor("cursor-brush");
    canvasRef.current.eraseMode(false);
  };
  const pencil = () => {
    setStroke(3);
    setCursor("cursor-pencil");
    canvasRef.current.eraseMode(false);
  };
  const eraser = () => {
    canvasRef.current.eraseMode(true);
    setCursor("cursor-eraser");
  };

  const handleColorChange = (e) => {
    setColor(e.hex);
  };
  return (
    <div className="relative">
      {scribbleExists || (
        <div>
          <div className="absolute grid w-full h-full p-3 place-items-center pointer-events-none text-xl">
            <span className="opacity-40">Draw something here.</span>
          </div>
        </div>
      )}
      <div className={`${cursor}`}>
        <ReactSketchCanvas
          ref={canvasRef}
          className="w-full aspect-square border-none "
          strokeWidth={stroke}
          strokeColor={color}
          onChange={onChange}
          withTimestamp={true}
        />
      </div>

      <div className="animate-in fade-in duration-700 text-left text-center">
        <button className="lil-button" onClick={undo}>
          <UndoIcon className="icon" />
        </button>
        <button className="lil-button" onClick={redo}>
          <RedoIcon className="icon" />
        </button>
        <button className="lil-button" onClick={reset}>
          <TrashIcon className="icon" />
        </button>
        <button className="lil-button" onClick={pencil}>
          <PencilIcon className="icon" />
        </button>
        <button className="lil-button" onClick={brush}>
          <BrushIcon className="icon" />
        </button>
        <button className="lil-button" onClick={eraser}>
          <EraserIcon className="icon" />
        </button>
        <button onClick={() => setDisplayPicker(!displayPicker)}>
          {displayPicker ? (
            <XSquareIcon className="icon" />
          ) : (
            <PaletteIcon className="icon" />
          )}
          {displayPicker && (
            <div style={popover}>
              <div style={cover} onClick={() => setDisplayPicker(false)} />
              <div onClick={(e) => e.stopPropagation()}>
                <ChromePicker
                  color={color}
                  onChange={(e) => handleColorChange(e)}
                />
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
