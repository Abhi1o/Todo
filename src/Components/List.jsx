import {IoClose} from 'react-icons/io5';
const List = ({ items,setItems,deleteItem}) => {
  return (
    <>
    {items.length !== 0 && (
      <article className='flex items-center justify-center '>
        <ul className=" w-[520px]  mt-6">
          {items.map(({ id, title }) => (
            <ul className=" bg-gray-100 px-3 rounded-md flex items-center justify-between mb-1">
              <li
                key={id}
                className="text-slate-600  py-2 antialiased  tracking-wider ">
                {" "}
                {title}
              </li>
              <button onClick={()=> deleteItem(id)}><IoClose className='text-rose-400 text-xl font-black' /></button>
            </ul>
          ))}
          <ul className=" flex text-xs items-center justify-between px-3 tracking-wider  text-gray-400">
            <li>{items.length} task remains </li>
            <li ><button onClick={()=> setItems([])}>clear all</button></li>
          </ul>
        </ul>
      </article>
    )}
      
    </>
  );
};
export default List;
