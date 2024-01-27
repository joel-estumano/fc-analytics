import React from "react";
import { ResultInterface } from "../interfaces/result.interface";

export const ComponentToPrint = React.forwardRef(
    (props: { result: ResultInterface }, ref: any) => (
        <div
            className="z-n1 position-absolute d-flex justify-content-center align-items-center p-5"
            ref={ref}
        >
            <div className="row">
                <div className="col-12">
                    <p>Etapa: 1°</p>
                    <p>Tempo total: {props.result.fullTime}</p>
                    <p>Posse: 0%</p>
                    <p>Posse: %0</p>
                </div>
            </div>
        </div>
    )
);
