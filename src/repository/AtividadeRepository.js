const _ = require('lodash');

const atividadeRepository = {
  FindByCodigo(codigo) {
    return this.ListAll().filter(x => x.codigo === codigo);
  },

  ListAll() {
    const atividades = [
      {
        codigo: 15660,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Tênis de mesa '
      },
      {
        codigo: 15670,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Tai chi chuan'
      },
      {
        codigo: 15675,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Tênis'
      },
      {
        codigo: 15680,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Tênis, duplas '
      },
      {
        codigo: 15685,
        met: 5.0,
        contexto: 'Esportes',
        atividade: 'Tênis, duplas'
      },
      {
        codigo: 15690,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Tênis, simples '
      },
      {
        codigo: 15700,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Trampolim'
      },
      {
        codigo: 15710,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Voleibol '
      },
      {
        codigo: 15711,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Voleibol, competitivo, em ginásio'
      },
      {
        codigo: 15720,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Voleibol, não-competitivo, com 6 a 9 membros no time'
      },
      {
        codigo: 15725,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Voleibol de praia'
      },
      {
        codigo: 15730,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Luta romana (1 match = 5 minutos)'
      },
      {
        codigo: 15731,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Wallyball'
      },
      {
        codigo: 15732,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Atletismo (peso, disco, martelo)'
      },
      {
        codigo: 15733,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Atletismo (salto em altura, distância e triplo, dardo, salto com vara)'
      },
      {
        codigo: 15734,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Atletismo (obstáculos - steeplechase, barreiras)'
      },
      {
        codigo: 15440,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Malabarismo (com as mãos, lançando objetos para cima e recuperando-os)'
      },
      {
        codigo: 15450,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Kickball'
      },
      {
        codigo: 15460,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Lacrosse'
      },
      {
        codigo: 15470,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Moto-cross'
      },
      {
        codigo: 15480,
        met: 9.0,
        contexto: 'Esportes',
        atividade: 'Corrida de orientação, trilhas'
      },
      {
        codigo: 15490,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Paddleball, competitivo'
      },
      {
        codigo: 15500,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Paddleball, casual '
      },
      {
        codigo: 15510,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Pólo'
      },
      {
        codigo: 15520,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Racketball, competitivo'
      },
      {
        codigo: 15530,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Racketball, casual '
      },
      {
        codigo: 15535,
        met: 11.0,
        contexto: 'Esportes',
        atividade: 'Escalar ou subir rochas'
      },
      {
        codigo: 15540,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Escalar em rochas, rappel'
      },
      {
        codigo: 15550,
        met: 12.0,
        contexto: 'Esportes',
        atividade: 'Pular corda, velocidade rápida'
      },
      {
        codigo: 15551,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Pular corda, velocidade moderada'
      },
      {
        codigo: 15552,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Pular corda, velocidade lenta'
      },
      {
        codigo: 15560,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Rugby'
      },
      {
        codigo: 15570,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Shuffleboard, boliche em gramado'
      },
      {
        codigo: 15580,
        met: 5.0,
        contexto: 'Esportes',
        atividade: 'Andar de skate'
      },
      {
        codigo: 15590,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Patinação '
      },
      {
        codigo: 15591,
        met: 12.5,
        contexto: 'Esportes',
        atividade: 'Roller blanding'
      },
      {
        codigo: 15600,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Saltar de pára-quedas'
      },
      {
        codigo: 15605,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Futebol competitivo'
      },
      {
        codigo: 15610,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Futebol casual '
      },
      {
        codigo: 15620,
        met: 5.0,
        contexto: 'Esportes',
        atividade: 'Softball ou beisebol, velocidade rápida ou lenta '
      },
      {
        codigo: 15630,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Softball'
      },
      {
        codigo: 15640,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Softball, lançamentos'
      },
      {
        codigo: 15650,
        met: 12.0,
        contexto: 'Esportes',
        atividade: 'Squash '
      },
      {
        codigo: 15180,
        met: 2.5,
        contexto: 'Esportes',
        atividade: 'Dardo, na parede ou gramado'
      },
      {
        codigo: 15190,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Corrida de carreta, empurrar ou dirigir carros'
      },
      {
        codigo: 15200,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Esgrima'
      },
      {
        codigo: 15210,
        met: 9.0,
        contexto: 'Esportes',
        atividade: 'Futebol americano, competitivo'
      },
      {
        codigo: 15230,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Futebol americano '
      },
      {
        codigo: 15235,
        met: 2.5,
        contexto: 'Esportes',
        atividade: 'Futebol americano ou beisebol, arremesso e pegada'
      },
      {
        codigo: 15240,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Frisbee'
      },
      {
        codigo: 15250,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Frisbee, ‘radical’'
      },
      {
        codigo: 15255,
        met: 4.5,
        contexto: 'Esportes',
        atividade: 'Golfe'
      },
      {
        codigo: 15265,
        met: 4.5,
        contexto: 'Esportes',
        atividade: 'Golfe, caminhando e transportando tacos'
      },
      {
        codigo: 15270,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Golfe, miniatura'
      },
      {
        codigo: 15285,
        met: 4.3,
        contexto: 'Esportes',
        atividade: 'Golfe, caminhando e empurrando tacos'
      },
      {
        codigo: 15290,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Golfe, usando carrinhos elétricos'
      },
      {
        codigo: 15300,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Ginástica'
      },
      {
        codigo: 15310,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Hacky sack'
      },
      {
        codigo: 15320,
        met: 12.0,
        contexto: 'Esportes',
        atividade: 'Andebol '
      },
      {
        codigo: 15330,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Andebol, meia-quadra'
      },
      {
        codigo: 15340,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Praticar vôo livre (asa delta)'
      },
      {
        codigo: 15350,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Hóquei, de campo'
      },
      {
        codigo: 15360,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Hóquei, no gelo'
      },
      {
        codigo: 15370,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Cavalgar'
      },
      {
        codigo: 15380,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Cavalgar, selar e cuidas de cavalo'
      },
      {
        codigo: 15390,
        met: 6.5,
        contexto: 'Esportes',
        atividade: 'Cavalgar, trotar'
      },
      {
        codigo: 15400,
        met: 2.5,
        contexto: 'Esportes',
        atividade: 'Cavalgar, passeando'
      },
      {
        codigo: 15410,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Colocar ferradura em cavalo'
      },
      {
        codigo: 15430,
        met: 10.0,
        contexto: 'Esportes',
        atividade: 'Judô, Jiu-jitsu, karatê, kick boxing, tae-kwon-do'
      },
      {
        codigo: 15010,
        met: 3.5,
        contexto: 'Esportes',
        atividade: 'Arco e flecha (sem finalidade de caça)'
      },
      {
        codigo: 15020,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Badminton, competitivo '
      },
      {
        codigo: 15030,
        met: 4.5,
        contexto: 'Esportes',
        atividade: 'Badminton, não competitivo, simples e duplas'
      },
      {
        codigo: 15040,
        met: 8.0,
        contexto: 'Esportes',
        atividade: 'Basquetebol, jogo '
      },
      {
        codigo: 15050,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Basquetebol, sem ser jogo '
      },
      {
        codigo: 15060,
        met: 7.0,
        contexto: 'Esportes',
        atividade: 'Basquetebol'
      },
      {
        codigo: 15075,
        met: 6.5,
        contexto: 'Esportes',
        atividade: 'Basquetebol, em cadeiras de roda'
      },
      {
        codigo: 15080,
        met: 2.5,
        contexto: 'Esportes',
        atividade: 'Bilhar'
      },
      {
        codigo: 15090,
        met: 3.0,
        contexto: 'Esportes',
        atividade: 'Boliche '
      },
      {
        codigo: 15100,
        met: 12.0,
        contexto: 'Esportes',
        atividade: 'Boxe, no ringue'
      },
      {
        codigo: 15110,
        met: 6.0,
        contexto: 'Esportes',
        atividade: 'Boxe, punching bag'
      },
      {
        codigo: 15120,
        met: 9.0,
        contexto: 'Esportes',
        atividade: 'Boxe'
      },
      {
        codigo: 15135,
        met: 5.0,
        contexto: 'Esportes',
        atividade: 'Jogos de criança com movimentação corporal intensa (amarelinha, 4-quadros, queimado, brinquedos de playgroud, taco etc)'
      },
      {
        codigo: 15140,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Treinar: futebol americano, futebol, basquetebol, basebol, natação, etc'
      },
      {
        codigo: 15150,
        met: 5.0,
        contexto: 'Esportes',
        atividade: 'Cricket (rebater, lançar)'
      },
      {
        codigo: 15160,
        met: 2.5,
        contexto: 'Esportes',
        atividade: 'Croquet'
      },
      {
        codigo: 15170,
        met: 4.0,
        contexto: 'Esportes',
        atividade: 'Curling (desporto de equipe praticado sobre o gelo, no qual se busca impulsionar rochas de 19 kg na direção de um alvo de 3,6 m de diâmetro)'
      },
      {
        codigo: 02080,
        met: 7.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ski-Machine (ergômetro de esqui)'
      },
      {
        codigo: 02090,
        met: 6.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Slimnastics, jazzercise (atividades ginásticas envolvendo movimento do jazz enquanto dança)'
      },
      {
        codigo: 02100,
        met: 2.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Alongamento, Hatha-Yoga'
      },
      {
        codigo: 02101,
        met: 2.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Alongamento leve'
      },
      {
        codigo: 02110,
        met: 6.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Conduzir aulas de ginástica aeróbia'
      },
      {
        codigo: 02120,
        met: 4.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Hidroginástica (aeróbia, calistênica/localizada)'
      },
      {
        codigo: 02130,
        met: 3.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Levantamento de pesos, esforço leve ou moderado, rotina leve'
      },
      {
        codigo: 02135,
        met: 1.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Turbilhão, sentado'
      },
      {
        codigo: 02010,
        met: 7.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário'
      },
      {
        codigo: 02011,
        met: 3.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário, 50W, esforço muito leve'
      },
      {
        codigo: 02012,
        met: 5.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário, 100 W, esforço leve'
      },
      {
        codigo: 02013,
        met: 7.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário, 150 W, esforço moderado'
      },
      {
        codigo: 02014,
        met: 10.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário, 200 W, esforço vigoroso'
      },
      {
        codigo: 02015,
        met: 12.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ciclismo, estacionário, 250 W, esforço muito vigoroso'
      },
      {
        codigo: 02020,
        met: 8.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Calistenia (i.e., flexões, abdominais, puxadas), pesado, esforço vigoroso'
      },
      {
        codigo: 02040,
        met: 8.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Treinamento em circuito'
      },
      {
        codigo: 02050,
        met: 6.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Levantamento de peso, power-lifting ou fisiculturismo, esforço vigoroso'
      },
      {
        codigo: 02060,
        met: 5.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Musculação'
      },
      {
        codigo: 02065,
        met: 9.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Ergômetros de esteira e escada'
      },
      {
        codigo: 02070,
        met: 7.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Remo, ergômetro estacionário'
      },
      {
        codigo: 02071,
        met: 3.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Remo, estacionário, 50 W, esforço leve'
      },
      {
        codigo: 02072,
        met: 7.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Remo, estacionário, 100 W, esforço moderado'
      },
      {
        codigo: 02073,
        met: 8.5,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Remo, estacionário, 150 W, esforço vigoroso'
      },
      {
        codigo: 02074,
        met: 12.0,
        contexto: 'Exercício de Condicionamento',
        atividade: 'Remo, estacionário, 200 W, esforço muito vigoroso'
      },
      {
        codigo: 01009,
        met: 8.5,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, BMX ou montanha'
      },
      {
        codigo: 01010,
        met: 4.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, < 16 km/h, lazer, para trabalho ou prazer'
      },
      {
        codigo: 01015,
        met: 8.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, velocidade em geral'
      },
      {
        codigo: 01020,
        met: 6.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, 16 a 19 km/h, lazer, lento, esforço leve'
      },
      {
        codigo: 01030,
        met: 8.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, 19 a 22 km/h, lazer, esforço moderado'
      },
      {
        codigo: 01040,
        met: 10.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, 22 a 25 km/h, corrida ou lazer, rápido, esforço vigoroso'
      },
      {
        codigo: 01050,
        met: 12.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, 25 a 30 km/h, corrida/sem explosão ou > 30 km/h, explosivo, muito veloz, corrida em geral'
      },
      {
        codigo: 01060,
        met: 16.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, > 32 km/h, corrida, sem explosão'
      },
      {
        codigo: 01070,
        met: 5.0,
        contexto: 'Ciclismo',
        atividade: 'Ciclismo, pedalando monociclo'
      },
      {
        codigo: 03010,
        met: 4.8,
        contexto: 'Dança',
        atividade: 'Balé ou dança moderna, twist, jazz, sapateado, jitterbug (dança em seis tempos, em pares, caracterizada por rodopios velozes – rockabilly)'
      },
      {
        codigo: 03015,
        met: 6.5,
        contexto: 'Dança',
        atividade: 'Aeróbia'
      },
      {
        codigo: 03016,
        met: 8.5,
        contexto: 'Dança',
        atividade: 'Aeróbia, step, com step de 15-20 cm'
      },
      {
        codigo: 03017,
        met: 10.0,
        contexto: 'Dança',
        atividade: 'Aeróbia, step, com step de 25-30 cm'
      },
      {
        codigo: 03020,
        met: 5.0,
        contexto: 'Dança',
        atividade: 'Aeróbia, baixo impacto'
      },
      {
        codigo: 03021,
        met: 7.0,
        contexto: 'Dança',
        atividade: 'Aeróbia, alto impacto'
      },
      {
        codigo: 03025,
        met: 4.5,
        contexto: 'Dança',
        atividade: 'Geral, Grega, Oriente Médio, hula, flamenco, swing, dança do ventre'
      },
      {
        codigo: 03030,
        met: 5.5,
        contexto: 'Dança',
        atividade: 'Dança de salão, rápido'
      },
      {
        codigo: 03031,
        met: 4.5,
        contexto: 'Dança',
        atividade: 'Dança de salão, rápido (disco, folk, square), line dancing (similar à quadrilha brasileira), dança irlandesa, polka, country'
      },
      {
        codigo: 03040,
        met: 3.0,
        contexto: 'Dança',
        atividade: 'Dança de salão, devagar (p.ex., valsa, foxtrot, dança lenta), samba, tango, séc XIX, mambo, chacha'
      },
      {
        codigo: 03050,
        met: 5.5,
        contexto: 'Dança',
        atividade: 'Anishinaabe ou outra dança ameríndia tradicional (danças indígenas em geral)'
      },
      {
        codigo: 12010,
        met: 6.0,
        contexto: 'Correr',
        atividade: 'Combinação de caminhada e atividades laborais (componente laboral com menos de 10 minutos)'
      },
      {
        codigo: 12020,
        met: 7.0,
        contexto: 'Correr',
        atividade: 'Jogging em geral'
      },
      {
        codigo: 12025,
        met: 8.0,
        contexto: 'Correr',
        atividade: 'Jogging, estacionário'
      },
      {
        codigo: 12027,
        met: 4.5,
        contexto: 'Correr',
        atividade: 'Jogging em uma mini-excursão'
      },
      {
        codigo: 12030,
        met: 8.0,
        contexto: 'Correr',
        atividade: 'Correr, 8 km/h (7,5 min.km-1)'
      },
      {
        codigo: 12040,
        met: 9.0,
        contexto: 'Correr',
        atividade: 'Correr, 8,3 km/h (7,1 min.km-1)'
      },
      {
        codigo: 12050,
        met: 10.0,
        contexto: 'Correr',
        atividade: 'Correr, 9,7 km/h (6,2 min.km-1)'
      },
      {
        codigo: 12060,
        met: 11.0,
        contexto: 'Correr',
        atividade: 'Correr, 10,7 km/h (5,6 min.km-1)'
      },
      {
        codigo: 12070,
        met: 11.5,
        contexto: 'Correr',
        atividade: 'Correr, 11,2 km/h (5,3 min.km-1)'
      },
      {
        codigo: 12080,
        met: 12.5,
        contexto: 'Correr',
        atividade: 'Correr, 12,0 km/h (5 min.km-1)'
      },
      {
        codigo: 12090,
        met: 13.5,
        contexto: 'Correr',
        atividade: 'Correr, 12,8 km/h (4,6 min.km-1)'
      },
      {
        codigo: 12100,
        met: 14.0,
        contexto: 'Correr',
        atividade: 'Correr, 13,8 km/h (4,3 min.km-1)'
      },
      {
        codigo: 12110,
        met: 15.0,
        contexto: 'Correr',
        atividade: 'Correr, 14,4 km/h (4,0 min.km-1)'
      },
      {
        codigo: 12120,
        met: 16.0,
        contexto: 'Correr',
        atividade: 'Correr, 16,0 km/h (3,7 min.km-1)'
      },
      {
        codigo: 12130,
        met: 18.0,
        contexto: 'Correr',
        atividade: 'Correr, 17,5 km/h (3,4 min.km-1)'
      },
      {
        codigo: 12140,
        met: 9.0,
        contexto: 'Correr',
        atividade: 'Correr, terrenos irregulares, tipo cross-country'
      },
      {
        codigo: 12150,
        met: 8.0,
        contexto: 'Correr',
        atividade: 'Correr'
      },
      {
        codigo: 12170,
        met: 15.0,
        contexto: 'Correr',
        atividade: 'Correr, subir rampa ou escada'
      },
      {
        codigo: 12180,
        met: 10.0,
        contexto: 'Correr',
        atividade: 'Correr numa pista, treino de equipe'
      },
      {
        codigo: 12190,
        met: 8.0,
        contexto: 'Correr',
        atividade: 'Correr, treinamento, empurrar cadeira de roda em situação competitiva'
      },
      {
        codigo: 17070,
        met: 3.0,
        contexto: 'Caminhar',
        atividade: 'Descer encostas/escadas'
      },
      {
        codigo: 17080,
        met: 6.0,
        contexto: 'Caminhar',
        atividade: 'Caminhadas longas em trilhas ou florestas'
      },
      {
        codigo: 17140,
        met: 5.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar usando muletas ou bengalas'
      },
      {
        codigo: 17150,
        met: 2.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, andar em casa'
      },
      {
        codigo: 17151,
        met: 2.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, menos 3 km/h, de modo confortável, em terreno plano, bem devagar'
      },
      {
        codigo: 17152,
        met: 2.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar a 3km/h, terreno plano e firme, ritmo lento'
      },
      {
        codigo: 17160,
        met: 3.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar por prazer'
      },
      {
        codigo: 17161,
        met: 2.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar da casa para o carro ou ônibus, do carro ou ônibus para outros lugares, como o trabalho'
      },
      {
        codigo: 17162,
        met: 2.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar até a casa de vizinhos ou familiares por razões sociais'
      },
      {
        codigo: 17165,
        met: 3.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar com o cachorro'
      },
      {
        codigo: 17170,
        met: 3.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 4 km/h, superfície firme'
      },
      {
        codigo: 17180,
        met: 2.8,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 4 km/h, descendo encosta'
      },
      {
        codigo: 17190,
        met: 3.3,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 5 km/h, terreno plano, superfície firme, ritmo moderado'
      },
      {
        codigo: 17200,
        met: 3.8,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 5,5 km/h, terreno plano, superfície firme, caminhando para exercitar-se, ritmo rápido'
      },
      {
        codigo: 17210,
        met: 6.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 5,5 km/h, subindo encosta'
      },
      {
        codigo: 17220,
        met: 5.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 6,5 km/h, terreno plano, superfície firme, ritmo muito rápido'
      },
      {
        codigo: 17230,
        met: 6.3,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 7 km/h, terreno plano, superfície firme, ritmo extremamente rápido'
      },
      {
        codigo: 17231,
        met: 8.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar, 7,5 km/h'
      },
      {
        codigo: 17250,
        met: 3.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar, por prazer, no intervalo do trabalho'
      },
      {
        codigo: 17260,
        met: 5.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar em pista ou terreno gramado'
      },
      {
        codigo: 17270,
        met: 4.0,
        contexto: 'Caminhar',
        atividade: 'Caminhar para o trabalho ou aula'
      },
      {
        codigo: 17280,
        met: 2.5,
        contexto: 'Caminhar',
        atividade: 'Caminhar para e de um local externo à casa'
      }
    ];

    return _.uniqBy(atividades, x => {
      return x.atividade.trim();
    });
  }
};

module.exports = atividadeRepository;
