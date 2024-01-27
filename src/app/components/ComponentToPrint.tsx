import React from "react";
import { ControleInterface } from "../interfaces/controle.interface";
import { ClubeInterface } from "../interfaces/clube.interface";

const calc = (controle: ControleInterface, clube: ClubeInterface) => {
    const percent = ((100 * clube.possessionTime) / controle.fullTime).toFixed(0);
    return <>{percent !== "NaN" ? percent : 0}%</>;
};

export const ComponentToPrint = React.forwardRef(
    (props: { controle: ControleInterface }, ref: any) => (
        <div
            className="z-n1 position-absolute d-flex justify-content-center align-items-center p-5"
            ref={ref}
        >
            <div className="row">
                <div className="col-12">
                    <p>Etapa: 1°</p>
                    <p>Tempo total:</p>
                    <p>
                        Posse Serra Branca: {calc(props.controle, props.controle.clubeA)}
                    </p>
                    <p>Posse visitante: {calc(props.controle, props.controle.clubeB)}</p>
                </div>
            </div>
        </div>
    )
);
