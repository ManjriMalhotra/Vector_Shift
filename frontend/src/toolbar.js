// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 p-4 shadow-md z-10 relative">
            <div className="flex flex-wrap gap-3 justify-center items-center max-w-5xl mx-auto">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};
