import React from "react";
import postre1 from "../img/cop.png"
import chocolate from "../img/ChocolateCaliente.jpg"
import coctelVino from "../img/cóctelesVinoCalienteNavideño.jpg"
import sidra from "../img/sidraManzana.jpg"
import poncheF from "../img/poncheDeFrutas.jpg"

export const Bebidas = () => {
  return (
    <div className="bebidas" id="bebida">
      <h2>Bebidas</h2>
      <div className="bebidas-content">
        <div className="bebidas-div">
            <h3>Ponche de Frutas</h3>
            <img src={poncheF} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ducimus officiis perferendis facere fuga, perspiciatis magni cumque
                illum, voluptas reprehenderit vitae blanditiis velit. Corporis
                doloremque labore, nostrum optio soluta quae?
            </p>
        </div>

        <div className="bebidas-div">
            <h3>Chocolate caliente</h3>
            <img src={chocolate} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ducimus officiis perferendis facere fuga, perspiciatis magni cumque
                illum, voluptas reprehenderit vitae blanditiis velit. Corporis
                doloremque labore, nostrum optio soluta quae?
            </p>
        </div>

        <div className="bebidas-div">
            <h3>Sidra de Manzana</h3>
            <img src={sidra} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ducimus officiis perferendis facere fuga, perspiciatis magni cumque
                illum, voluptas reprehenderit vitae blanditiis velit. Corporis
                doloremque labore, nostrum optio soluta quae?
            </p>
        </div>

        <div className="bebidas-div">
            <h3>Cóctel de vino caliente navideño</h3>
            <img src={coctelVino} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ducimus officiis perferendis facere fuga, perspiciatis magni cumque
                illum, voluptas reprehenderit vitae blanditiis velit. Corporis
                doloremque labore, nostrum optio soluta quae?
            </p>
        </div>
      </div>
    </div>
  );
};
