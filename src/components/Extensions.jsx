import React, { useState } from "react";
import { FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
import data from "../data/data";

function Extensions() {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(data); // stateful copy of data

  const handleToggle = (index) => {
    const updated = [...extensions];
    updated[index].isActive = !updated[index].isActive;
    setExtensions(updated);
  };

  const handleRemove = (index) => {
    const updated = extensions.filter((_, i) => i !== index);
    setExtensions(updated);
  };

  const filteredData = extensions.filter((extension) => {
    if (filter === "active") return extension.isActive === true;
    if (filter === "inactive") return extension.isActive === false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1
          className="text-xl font-bold"
          style={{ color: "var(--text-color)" }}
        >
          Extensions List
        </h1>
        <div className="text-white ">
          <button
            onClick={() => setFilter("all")}
            className="cursor-pointer mr-2 border-[1px] rounded-full px-3 py-1 active:ring-2 ring-red-400"
            style={{
              backgroundColor:
                filter === "all"
                  ? "var(--filtered-colors)"
                  : "var(--bg-color-all)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className="cursor-pointer mr-2 border-[1px] rounded-full px-3 py-1 active:ring-2 ring-red-400"
            style={{
              backgroundColor:
                filter === "active"
                  ? "var(--filtered-colors)"
                  : "var(--bg-color-active)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("inactive")}
            className="cursor-pointer border-[1px] rounded-full px-3 py-1 active:ring-2 ring-red-400"
            style={{
              backgroundColor:
                filter === "inactive"
                  ? "var(--filtered-colors)"
                  : "var(--bg-color-inactive)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          >
            Inactive
          </button>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-2 list-none">
        {filteredData.map(
          ({ logo, name, description, isActive }, filteredIndex) => {
            // Find the index in full list
            const actualIndex = extensions.findIndex(
              (ext) => ext.name === name
            );

            return (
              <div
                className="border-[1px] rounded-2xl p-4 flex flex-col"
                style={{
                  backgroundColor: "var(--bg-color)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex flex-row h-20">
                  <img src={logo} alt={`${name} logo`} className="w-12 h-12 " />
                  <div className="px-2">
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--text-color)" }}
                    >
                      {name}
                    </h3>
                    <p
                      className="text-sm text-gray-700"
                      style={{ color: "var(--text-secondary-color)" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3 mt-5">
                  <button
                    onClick={() => handleRemove(actualIndex)}
                    className="px-3 py-1 border-[1px] rounded-2xl cursor-pointer transition-colors duration-200 remove-hover active:ring-2 ring-red-400"
                    title="Remove Extension"
                    style={{
                      color: "var(--text-color)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => handleToggle(actualIndex)}
                    className={`cursor-pointer flex items-center rounded-full p-[4px] w-[28px] h-[16px] transition-colors duration-300 ${
                      isActive ? "bg-red-700" : "bg-neutral-400"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-full shadow-md w-[14px] h-[14px] transition-transform duration-300`}
                      style={{
                        transform: isActive
                          ? "translateX(8px)"
                          : "translateX(-3px)",
                      }}
                    />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Extensions;
