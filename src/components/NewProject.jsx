import { forwardRef, useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd }) {
  const modalRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      dueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value</p>
        <p>Plase make sure that you provide a valid value for every field</p>
      </Modal>
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
    </>
  );
}
