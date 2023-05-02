import type { Items } from "@prisma/client";
import { type Dispatch, type SetStateAction, useState } from "react";
import { api } from "t3-project/utils/api";

interface ItemModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setItems: Dispatch<SetStateAction<Items[]>>;
}

const ItemModal = ({ setModalOpen, setItems }: ItemModalProps) => {
  const [input, setInput] = useState<string>("");

  const { mutate: addItem } = api.item.addItem.useMutation({
    onSuccess: (item) => setItems((prev) => (prev ? [...prev, item] : [item])),
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 rounded-md bg-white p-3">
        <h3 className="text-xl font-semibold">Item Name</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-md border-2 border-gray-400 bg-gray-200 px-1 shadow-sm"
        />

        <div className="grid grid-cols-2 gap-8">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="rounded-md bg-gray-500 p-1 text-xs text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              addItem({ name: input });
              setModalOpen(false);
            }}
            className="rounded-md bg-violet-500 p-1 text-xs text-white transition hover:bg-violet-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
