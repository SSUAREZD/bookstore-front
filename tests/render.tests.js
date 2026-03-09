import {render, screen} from '@testing-library/react'
import Page from "../app/createAuthors/page"
import test, { describe } from 'node:test';
import { expectNoPendingImmediates } from 'next/dist/server/node-environment-extensions/fast-set-immediate.external';


const setUp = () =>{
    render(<Page />);

    const  nameInput = screen.getByLabelText(/Name/i)
    const  birthDate= screen.getByLabelText(/Birth Date/i)
    const  description = screen.getByLabelText(/Description/i)

    return {nameInput, birthDate,description}
}
describe('Render de forms', ()=>{
    test('render', () =>{
        const {nameInput,birthDate,description} = setUp()
        expect(screen.getByLabelText()).toBeInTheDocument()
        expect(birthDate).toBeInTheDocument()
        expect(description).toBeInTheDocument()



    })
})
function expect(nameInput: HTMLElement) {
    throw new Error('Function not implemented.');
}

