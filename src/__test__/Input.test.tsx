import React, { useState } from "react";
import {render, screen} from "@testing-library/react";
import Input from "../components/Input";
import userEvent from "@testing-library/user-event";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const TestInput=()=>{
    const {
        register,
        handleSubmit,
    } = useForm();
    
    const [listTest, setlistTest]=useState<string[]>([])
    const testInput=(data:{email:string})=>{
        setlistTest([...listTest,data.email])
    }

    return(<>
        <form onSubmit={handleSubmit(testInput)}>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
            />
            <button>Enviar</button>

        </form>
        <ul>
            {listTest && listTest.map((iten,index)=>(<li key={index}>{iten}</li>))}
        </ul>
        </>
    )
}

describe("input component tests",()=>{
    test('testing input register', async()=>{
        render(<TestInput/>);

        userEvent.type(screen.getByRole("textbox"), "Ian");
        userEvent.click(screen.getByRole("button"));

        const returnAbilities = await screen.findAllByRole("listitem");

        expect(returnAbilities).toHaveLength(1);

    })  
})

