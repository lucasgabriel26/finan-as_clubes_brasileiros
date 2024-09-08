let dados = [
    {
        titulo: "Flamengo",
        rating: "AAA",
        serie: "A",
        receitabruta: 1.374,
        receitarecorrente: 1.070,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-flamengo-em-2023-com-faturamento-recorde-e-reducao-da-divida-clube-prepara-novo-ciclo-de-investimentos.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg"
    },
    { 
        titulo: "Corinthians", 
        serie: "A", 
        rating: "C", 
        receitabruta: 937, 
        receitarecorrente: 686,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-corinthians-em-2023-a-crise-generalizada-do-parque-sao-jorge-e-agravada-pelo-caos-nas-contas-alvinegras.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg" 
    },
    { 
        titulo: "Palmeiras", 
        serie: "A", 
        rating: "A", 
        receitabruta: 927, 
        receitarecorrente: 740,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-palmeiras-em-2023-com-faturamento-em-alta-e-contas-em-ordem-unica-pressao-recorrente-e-por-titulos.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg"
    },
    { 
        titulo: "Athletico", 
        serie: "A", 
        rating: "AA", 
        receitabruta: 721, 
        receitarecorrente: 480,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-athletico-pr-em-2023-com-divida-do-estadio-equacionada-e-receita-em-alta-clube-mira-novos-desafios.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg"
    },
    { 
        titulo: "Fluminense", 
        serie: "A", 
        rating: "D", 
        receitabruta: 694, 
        receitarecorrente: 678,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-fluminense-em-2023-apesar-da-gloria-e-da-premiacao-na-libertadores-quadro-continua-a-se-agravar.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg"
    },
    { 
        titulo: "São Paulo", 
        serie: "A", 
        rating: "C", 
        receitabruta: 681, 
        receitarecorrente: 560,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-sao-paulo-em-2023-mesmo-com-alta-na-receita-e-premiacao-da-copa-do-brasil-a-conta-tricolor-nao-fechou.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
    },
    { 
        titulo: "Internacional", 
        serie: "A", 
        rating: "D", 
        receitabruta: 635, 
        receitarecorrente: 558,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-internacional-em-2023-bom-futebol-e-controle-de-custos-salvam-clube-de-rapida-deterioracao-das-contas.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg"
    },
    { 
        titulo: "Botafogo", 
        serie: "A", 
        rating: "D", 
        receitabruta: 569, 
        receitarecorrente: 486,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-botafogo-em-2023-a-melhor-saf-em-termos-de-futebol-da-sinais-preocupantes-nas-contas-entre-gastos-e-dividas.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg"
    },
    { 
        titulo: "Cruzeiro", 
        serie: "A", 
        rating: "D", 
        receitabruta: 567, 
        receitarecorrente: 546,
        link: "https://ge.globo.com/negocios-do-esporte/noticia/2024/07/01/as-financas-do-cruzeiro-em-2023-austeridade-da-saf-de-ronaldo-manteve-a-casa-em-ordem-mas-passado-e-cobranca-pesam.ghtml",
        escudo: "https://s.sde.globo.com/media/organizations/2021/02/13/cruzeiro_2021.svg"
    },
    { 
        titulo: "Santos", 
        serie: "A", 
        rating: "D", 
        receitabruta: 524, 
        receitarecorrente: 251 
    },
    { 
        titulo: "RB Bragantino", 
        serie: "A", 
        rating: "AA", 
        receitabruta: 488, 
        receitarecorrente: 430 
    },
    { 
        titulo: "Grêmio", 
        serie: "A", 
        rating: "A", 
        receitabruta: 480, 
        receitarecorrente: 430 
    },
    { 
        titulo: "Atlético MG", 
        serie: "A", 
        rating: "D", 
        receitabruta: 439, 
        receitarecorrente: 327 
    },
    { 
        titulo: "Fortaleza", 
        serie: "A", 
        rating: "C", 
        receitabruta: 382, 
        receitarecorrente: 347 
    },
    { 
        titulo: "Vasco", 
        serie: "A", 
        rating: "D", 
        receitabruta: 364, 
        receitarecorrente: 239 
    },
    { 
        titulo: "Bahia", 
        serie: "A", 
        rating: "D", 
        receitabruta: 240, 
        receitarecorrente: 234 
    },
    { 
        titulo: "Goiás", 
        serie: "A", 
        rating: "C", 
        receitabruta: 238, 
        receitarecorrente: 234 
    },
    { 
        titulo: "Sport", 
        serie: "B", 
        rating: null, // Observe que o rating do Sport é nulo
        receitabruta: 207, 
        receitarecorrente: 204 
    }, 
    { 
        titulo: "América MG", 
        serie: "A", 
        rating: "D", 
        receitabruta: 196, 
        receitarecorrente: 134 
    },
    { 
        titulo: "Cuiabá", 
        serie: "A", 
        rating: "A", 
        receitabruta: 169, 
        receitarecorrente: null // Observe que a receita recorrente do Cuiabá é nula
    }, 
    { 
        titulo: "Avaí", 
        serie: "B", 
        rating: null, // Observe que o rating do Sport é nulo
        receitabruta: 133, 
        receitarecorrente: 126 
    },
    {
        titulo: "Ceará",
        serie: "B",
        rating: null,
        receitabruta: 132,
        receitarecorrente: 120
    },
    {
        titulo: "Chapecoense",
        serie: "B",
        rating: null,
        receitabruta: 128,
        receitarecorrente: 122
    },
    {
        titulo: "Atlético-GO",
        serie: "B",
        rating: null,
        receitabruta: 119,
        receitarecorrente: 111
    },
    {
        titulo: "Criciúma",
        serie: "B",
        rating: null,
        receitabruta: 102,
        receitarecorrente: 101
    },
    {
        titulo: "Coritiba",
        serie: "A",
        rating: "D",
        receitabruta: 100,
        receitarecorrente: 88
    },
    {
        titulo: "Vitória",
        serie: "B",
        rating: null,
        receitabruta: 73,
        receitarecorrente: 66
    },
    {
        titulo: "Botafogo-SP",
        serie: "B",
        rating: null,
        receitabruta: 39,
        receitarecorrente: 37
    },
    {
        titulo: "Guarani",
        serie: "B",
        rating: null,
        receitabruta: 37,
        receitarecorrente: 27
    },
    {
        titulo: "Ponte Preta",
        serie: "B",
        rating: null,
        receitabruta: 32,
        receitarecorrente: 30
    },
    {
        titulo: "Vila Nova",
        serie: "B",
        rating: null,
        receitabruta: 30,
        receitarecorrente: 27
    },
    {
        titulo: "ABC",
        serie: "B",
        rating: null,
        receitabruta: 23,
        receitarecorrente: null
    },
    {
        titulo: "Londrina",
        serie: "B",
        rating: null,
        receitabruta: 6,
        receitarecorrente: 5
    }
];