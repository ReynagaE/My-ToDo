import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useLists } from "../context/ListContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isModalListOpen, setIsModalListOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [shouldUpdateLists, setShouldUpdateLists] = useState(false);

  const { getLists, lists, createList, updateList, deleteList } = useLists();

  useEffect(() => {
    if (shouldUpdateLists) {
      getLists();
      setShouldUpdateLists(false);
    }
    getLists();
  }, [shouldUpdateLists]);

  const toggleModalList = () => {
    setIsModalListOpen(!isModalListOpen);
  };

  const toggleDeleteModal = (list) => {
    setSelectedList(list);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const toggleEditModal = (list) => {
    setSelectedList(list);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDeleteList = async (id) => {
    await deleteList(id);
    setShouldUpdateLists(true);
    toggleDeleteModal();
  };

  const handleUpdateList = async (data) => {
    const updatedList = {
      ...selectedList,
      title: data.title,
    };
    await updateList(updatedList);
    setShouldUpdateLists(true);
    toggleEditModal();
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    createList(data);
    reset();
    toggleModalList();
    setShouldUpdateLists(true);
  };

  return (

    <div>
      <div className="bg-blue-800 max-w-md w-max h-screen p-10 flex flex-col justify-end">
      <div className="max-h-screen overflow-y-auto">
        {lists.map((list) => (
          <div
          key={list._id}
          className="flex flex-row justify-evenly text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-white border-2"
        >
          <div className="flex flex-col">
            <h1>{list.title}</h1>
            <p>Tasks: {list.tasks.length}</p>
          </div>
          <div className="flex flex-row">
            <button className="m-1" onClick={() => toggleEditModal(list)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="m-1" onClick={() => toggleDeleteModal(list)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        ))}
      </div>

      <div className="flex flex-col justify-end flex-grow m-1">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="block text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-white border-2"
          type="button"
          onClick={toggleModalList}
        >
          Create List
        </button>
      </div>

      {isModalListOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50"
        >
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
                onClick={toggleModalList}
              >
                Close
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Create List
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Title"
                      required
                      {...register("title")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create List
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && selectedList && (
        <div
          id="delete-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50"
        >
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Delete List
                </h3>
                <p className="mb-6">
                  ¿Are you sure you want to permanently delete this list?
                </p>
                <div className="flex justify-end">
                  <button
                    className="w-full mr-2 text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => handleDeleteList(selectedList._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="w-full text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={toggleDeleteModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && selectedList && (
        <div
          id="edit-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50"
        >
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="edit-modal"
                onClick={toggleEditModal}
              >
                Close
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Update List
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(handleUpdateList)}
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Title"
                      required
                      defaultValue={selectedList.title}
                      {...register("title")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update List
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
    
  );
}

export default Sidebar;