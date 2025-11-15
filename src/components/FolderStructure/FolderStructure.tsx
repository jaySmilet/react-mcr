import type { Folder } from "../../static-data";

type FolderStructureProps = {
  folderStructure: Folder;
  path?: string[];
  onToggle?: (path: string[]) => void;
};

const FolderStructure = ({
  folderStructure,
  path = [],
  onToggle,
}: FolderStructureProps) => {
  const handleExpand = () => {
    if (onToggle) onToggle(path);
  };
  return (
    <div className="flex flex-col gap-4 ms-3 mt-3">
      <div className="folder-structure">
        <div className="flex align-center gap-2">
          {folderStructure.children && folderStructure.children?.length > 0 && (
            <button
              className={`cursor-pointer ${
                folderStructure.isFold ? "rotate-90" : "rotate-0"
              }`}
              onClick={handleExpand}
            >
              {">"}
            </button>
          )}
          <span
            className={`${
              folderStructure.children && folderStructure.children?.length > 0
                ? "font-semibold"
                : ""
            }`}
          >
            {folderStructure.name}
          </span>
        </div>
        {folderStructure.isFold &&
          folderStructure.children &&
          folderStructure.children.length > 0 && (
            <div style={{ paddingLeft: "20px" }}>
              {folderStructure.children.map((child) => (
                <FolderStructure
                  key={child.name}
                  folderStructure={child}
                  path={[...path, child.name]}
                  onToggle={onToggle}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default FolderStructure;
