import { forwardRef, useRef } from 'react';
import Input from './Input';

export default function NewProject({ onAdd }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // validation ...

    onAdd({
      title,
      description,
      dueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-stone-800 text-stone-50  rounded-md hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" id="title" label="Title" ref={titleRef} />
        <Input
          id="description"
          label="Description"
          textarea
          ref={descriptionRef}
        />
        <Input type="date" id="due-date" label="Due Date" ref={dueDateRef} />
      </div>
    </div>
  );
}
