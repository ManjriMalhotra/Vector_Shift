// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} px-5 py-2 rounded-full cursor-grab transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 bg-slate-700 text-slate-100 border border-slate-600 flex items-center justify-center font-medium shadow-sm`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          <span>{label}</span>
      </div>
    );
  };
  