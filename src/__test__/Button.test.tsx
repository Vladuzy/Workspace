import React, { useState } from "react";
import {render, screen} from "@testing-library/react";
import Button from "../components/Button";
import userEvent from "@testing-library/user-event";

const TestButton=()=>{
            const [listTest, setlistTest]=useState<string[]>([])
            const testClick=()=>{
                setlistTest([...listTest,"oi"])
            }

            return (
                <div>
                    <Button text="oi" handleClick={testClick} />
                    <ul>
                    {listTest.map((iten,index)=><li key={index}>{iten}</li>)}
                    </ul>
                </div>
            )
        }

describe("button component tests",()=>{
    test('testing handleClick', async ()=>{

        render(<TestButton/>);

        userEvent.click(screen.getByRole("button"));
        userEvent.click(screen.getByRole("button"));
        userEvent.click(screen.getByRole("button"));

        const returnAbilities = await screen.findAllByRole("listitem");

        expect(returnAbilities).toHaveLength(3);

    })  
})