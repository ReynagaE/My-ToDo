import { createContext, useContext, useState } from "react";
import { createListsRequest, getListsRequest, updateListsRequest, deleteListsRequest } from "../api/list";

const ListContext = createContext();

export const useLists = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }

  return context;
};

export function ListProvider({ children }) {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    try {
      const res = await getListsRequest();
      setLists(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createList = async (list) => {
    try {
      const res = await createListsRequest(list);
      console.log(res);
      getLists(); 
    } catch (error) {
      console.log(error);
    }
  };

  const updateList = async (list) => {
    try {
      const res = await updateListsRequest(list);
      console.log(res);
      getLists(); 
    } catch (error) {
      console.log(error);
    }
  };

  const deleteList = async (id) => {
    try {
      const res = await deleteListsRequest(id);
      console.log(res);
      getLists(); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListContext.Provider
      value={{
        lists,
        createList,
        updateList,
        deleteList,
        getLists,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
