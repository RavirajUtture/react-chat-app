
import { TbSearch } from "react-icons/tb";
const SearchInput = () => {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type="text" placeholder="Search..." className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
              <TbSearch />
            </button>
        </form>
    </div>
  )
}

export default SearchInput