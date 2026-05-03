import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900 text-slate-100 overflow-hidden font-sans">
      <PipelineToolbar />
      <div className="flex-grow relative">
        <PipelineUI />
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
