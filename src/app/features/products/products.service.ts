import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Aguarrás',
      category: 'Solventes',
      image: 'assets/images/004591fb67cf8816eb223c36a0cef2c4.jpg',
      description: 'Indicado na diluição de esmaltes sintéticos longos em óleo, desengraxante e desengordurante.',
      price:"R$145.50",
    },
    {
      id: 2,
      name: 'Cor & Proteção',
      category: 'Ferragem',
      image: 'assets/images/tinta_esmalte_contra_ferrugem_preto_brilho_3_6l_suvinil_158273_1_86ac7cbda77f12415c70f96a2e45899a.webp',
      description: 'Indicado para superfícies de madeira, ferro, alumínio e galvanizados para ambientes internos e externos. Suvinil Esmalte Cor & Proteção Brilhante Transparente é indicado para ambientes internos e externos de madeira.',
      price:"R$164.87",
    },
    {
      id: 3,
      name: 'Fosco Absoluto',
      category: 'Acrilica',
      image: 'assets/images/tinta-acrilica-fosca-absoluto-premium-3-6l-futura.jpg',
      description: 'Indicada para pintura de superfícies externas e internas de alvenaria, massa acrílica, massa corrida, gesso e texturas, tornando os ambientes mais bonitos e elegantes. Sua película propicia uma maior facilidade à remoção de sujeiras, provocadas por alimentos, bebidas, marcas de mão e lápis de cor, mantendo inalterada a proteção da superfície, após limpeza.',
      price:"R$167.90",
    },
    {
      id: 4,
      name: 'Luvas de Segurança',
      category: 'Proteção',
      image: 'assets/images/Luva-Nitrílica-Volk-Sem-Forro-Verde-Volk-CA-16314-300x300.jpg.webp',
      description: 'Elas têm múltiplas funções, já que evitam que o pintor suje as mãos com tinta e tenha contato direto com substâncias químicas. Além disso, elas garantem, ainda, maior firmeza às mãos, evitando que o pincel ou rolo de tinta deslize das mãos.',
      price:"R$11.90",
    },
    {
      id:5,
      name: 'Óculos',
      category: 'Proteção',
      image: 'assets/images/Oculos-de-Seguranca-Ampla-Visao-Spider-Valeplast-CA-40957-300x300.jpg.webp',
      description: 'Impedem que pigmentos e substâncias químicas entrem em contato com a área dos olhos, causando dano temporário ou permanente. Além disso, eles também protegem de respingos, poeira, entre outros elementos.',
      price:"R$12.10",
    },
    {
      id:6,
      name: 'Proteção Total',
      category:'Acrilica',
      image:'assets/images/tinta-emborrachada-suvinil-lago-profundo-3-2-l.jpg',
      description:'A Suvinil Proteção total é ideal para fachada de casas. Uma tinta elástica que torna as paredes impermeáveis, protegendo-as contra infiltrações causadas por fissuras (trincas finas). Seu acabamento oferece proteção contra a ação do sol, da poluição e demais intempéries.',
      price:"R$239.00",
    },
    {
      id:7,
      name: 'Pincel Trincha',
      category:'Material de Pintura',
      image:'assets/images/pincel_trincha_tigre_2_50mm_vermelho_6477_1_4898a23bb7a7284e90ad4113e3a0d60e.webp',
      description:'Indicado para pinturas em geral com tintas látex e acrílicas. Utilizado também na limpeza de peças e máquinas. Manter em local seco e arejado, em temperatura ambiente, protegido do sol, umidade e contaminantes. ',
      price:"R$7.90",
    },
    {
     id:8,
     name:'Rolo Lã Epoxi',
     category:'Material de Pintura',
     image: 'assets/images/8135bec61b14ef5745704e90f82ef706.webp',
     description:'O Rolo de Pintura Industrial de Lã Epóxi 326/5 da Atlas possui lã de poliéster, com 5mm de altura, resistente a solventes. O Rolo de Lã Epóxi 326/5 foi especialmente desenvolvido para pintura com resinas, esmaltes e epóxi sobre grandes superfícies, onde não se requer fino acabamento.',
     price:"R$23.25",
    },
    {
     id:9,
     name:'Sempre Branco',
     category:'Ferragem',
     image:'/assets/images/img_008469_1.webp',
     description:' Com ótima secagem e excelente acabamento, o produto é indicado para proteger superfícies de ambientes internos e externos de madeiras, metais novos e repintura.',
     price:"R$179.90",
    },
    {
     id:10,
     name:'Super Epóxi',
     category:'Solventes',
     image:'/assets/images/925.webp',
     description:' Base Solvente combina resistência à água e à umidade com alta aderência, que facilita a limpeza da superfície sem perder a cor e o brilho. Epóxi é um esmalte  catalisável de alto brilho que proporciona  excelente  dureza,  resistência  àumidade, a abrasão e ótima aderência. Permite uma menor aderência da sujeira, facilitando a limpeza..',
     price:"R$299.90",
    },
    {
     id:11,
     name:'Toque de Seda',
     category:'Acrilica',
     image:'/assets/images/tinta-acrilica-acetinada-suvinil-resina-aromatica-3-2-l.jpg',
     description:'Esse produto tem acabamento acetinado, que entrega um brilho leve para a sua parede, com visual sofisticado e ótimo para qualquer espaço.',
     price:"R$219.00",
    }
  ];
  getProducts() {
   return this.products
  }
  filterProductsBy(categoryName:string){
    return this.products.filter(item =>{
    return item.category == categoryName
    })
  }

}
