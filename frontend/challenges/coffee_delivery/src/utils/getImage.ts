import americano from "../assets/americano.png";
import arabe from "../assets/arabe.png";
import cafe_com_leite from "../assets/cafe_com_leite.png";
import cafe_gelado from "../assets/cafe_gelado.png";
import capuccino from "../assets/capuccino.png";
import chocolate_quente from "../assets/chocolate_quente.png";
import cubano from "../assets/cubano.png";
import expresso from "../assets/expresso.png";
import expresso_cremoso from "../assets/expresso_cremoso.png";
import havaiano from "../assets/havaiano.png";
import irlandes from "../assets/irlandes.png";
import latte from "../assets/latte.png";
import macchiato from "../assets/macchiato.png";
import mochaccino from "../assets/mochaccino.png";

export const getImage = (imageName: string): string => {
  return (
    {
      expresso: expresso,
      arabe: arabe,
      americano: americano,
      capuccino: capuccino,
      latte: latte,
      mochaccino: mochaccino,
      cafe_com_leite: cafe_com_leite,
      cafe_gelado: cafe_gelado,
      chocolate_quente: chocolate_quente,
      cubano: cubano,
      expresso_cremoso: expresso_cremoso,
      havaiano: havaiano,
      irlandes: irlandes,
      macchiato: macchiato,
    }[imageName] || expresso
  );
};
