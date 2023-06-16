import React, { FormEvent, FormEventHandler, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'

type SearchProps = {
    inputValue: string
    onChangeInput: FormEventHandler<HTMLInputElement>
}

const SearchDom = ({inputValue, onChangeInput}: SearchProps) => {
    return (
        <div className="search flex items-center w-full bg-secondary p-3 rounded-full">
            <SearchIcon
                className="search__icon text-gray-500"
                fontSize="inherit"
            />
            <input
                className="search__field w-full outline-0 bg-transparent pl-2 font-medium"
                type="text"
                placeholder="Search Twitter"
                value={inputValue}
                onInput={onChangeInput}
            />
            { inputValue ? <CancelIcon className="search__close" /> : null }
        </div>
    )
}

const Search = () => {
    const [inputValue, setInputValue] = useState("")

    const onChangeInput: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return <SearchDom inputValue={inputValue} onChangeInput={onChangeInput}/>
}

export default Search
