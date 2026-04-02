const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nomes = ['Pedro', 'Valeria', 'Geraldo', 'Giselle']

let acertos = 0

leitor.question('Olá jogador!\n Qual é o seu nome?\n>', (nome) => {
    console.log('Muito prazer em te conhecer', nome, '\n Esse questionario foi desenvolvido para você, então, as perguntas são exclusivas, VAMOS JOGAR :)')
    console.log('Orientações:\nResponda com as letras das alternativas\n Somente uma alternativa correta por questão')



    if (nome == 'Pedro') {
        leitor.question('Qual a cor predominante do céu?\n (a) azul\n (b) preto\n (c) Incolor\n (d) amarelo\n>', (respostaPedro1) => {
            if (respostaPedro1 == 'a') {
                acertos++
            }

            leitor.question('Qual é a moeda oficial da argentina?\n (a) Peso\n (b) soles\n (c) bolivianos\n (d) Incas\n>',
                (respostaPedro2) => {
                    if (respostaPedro2 == 'a') {
                        acertos++
                    }


                    leitor.question('Qual time de futebol brasileiro foi o primeiro a conquistar um torneio mundial?\n (a) Flamengo\n (b) Remo\n (c) Palmeiras\n (d) Brasiliense\n>', (respostaPedro3) => {
                        if (respostaPedro3 == 'c') {
                            acertos++
                        }

                        leitor.question('Qual o segundo pais com maior numeros de aeroportos registrados oficialmente?\n (a) Estados Unidos\n (b) China\n (c) Brasil\n (d) Russia\n>', (respostaPedro4) => {
                            if (respostaPedro4 == 'c') {
                                acertos++
                            }

                            leitor.question('Qual é o maior mamifero do planeta?\n (a) Elefante\n (b) Girafa\n (c) Baleira Azul\n (d) Orca\n>', (respostaPedro5) => {
                                if (respostaPedro5 == 'c') {
                                    acertos++
                                }

                                leitor.question('Qual pais tem o formato de uma bota?\n (a) Brasil\n (b) Mongólia\n (c) Iraque\n (d) Italia\n>', (respostaPedro6) => {
                                    if (respostaPedro6 == 'd') {
                                        acertos++
                                    }

                                    console.log('Você acertou:', [acertos])
                                    leitor.close();
                                })
                            })
                        })

                    })
                }
            )


        })

    }



    else if (nome == 'Valeria') {
        leitor.question('Qual a capital de Minas Gerais?\n (a) Minas gerais\n (b) Belo horizonte\n (c) Morretes\n>', (respostaValeria1) => {
            if (respostaValeria1 == 'b') {
                acertos++
            }

            leitor.question('Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?\n (a) 24 horas\n (b) 7 dias\n (c) 365 dias\n (d) 30 dias\n>', (respostaValeria2) => {
                if (respostaValeria2 == 'a') {
                    acertos++
                }

                leitor.question('A que temperatura a água ferve na altura do mar?\n (a) 80º\n (b) 100º\n (c) 200º\n (d) 130º\n>', (respostaValeria3) => {
                    if (respostaValeria3 == 'b') {
                        acertos++
                    }

                    leitor.question('Quantos ossos possuimos no corpo?\n (a) 125\n (b) 206\n (c) 324\n (d) 97\n>', (respostaValeria4) => {
                        if (respostaValeria4 == 'b') {
                            acertos++
                        }

                        leitor.question('Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?\n (a) 110\n (b) 333\n (c) 30\n (d) 33\n>', (respostaValeria5) => {
                            if (respostaValeria5 == 'd') {
                                acertos++
                            }

                            leitor.question('Qual o plural de chapéu?\n (a) Chapéis\n (b) Chapéus\n (c) Chapuzes\n (d) Os chapéu\n>', (respostaValeria6) => {
                                if (respostaValeria6 == 'b') {
                                    acertos++
                                }

                                console.log('Você acertou:', [acertos], 'perguntas')
                                leitor.close();
                            })
                        })

                    })
                })
            })
        })
    }


    else if (nome == 'Geraldo') {
        leitor.question('O que significa o termo: Guerra fria?\n (a) Guerra durante o inverno\n (b) Periodo de guerras napoleônicas\n (c) Guerra de influencia sem uso de armas\n (d) Guerra no periodo das grandes navegações\n>', (respostaGeraldo1) => {
            if (respostaGeraldo1 == 'c') {
                acertos++
            }

            leitor.question('Quem era o discipulo amado de Jesus segundo ele mesmo?\n (a) Pedro\n (b) João\n (c) Judas Tadeu\n (d) Thiago\n>', (respostaGeraldo2) => {
                if (respostaGeraldo2 == 'b') {
                    acertos++
                }

                leitor.question('Qual foi a primeira capital do Brasil?\n (a) Rio de Janeiro\n (b) Belo Horizonte\n (c) Belem\n (d) Salvador\n>', (respostaGeraldo3) => {
                    if (respostaGeraldo3 == 'd') {
                        acertos++
                    }

                    leitor.question('Qual é o resultado desta operação: 35x(5+10)\n (a) 525\n (b) 533\n (c) 285\n (d) 300\n>', (respostaGeraldo4) => {
                        if (respostaGeraldo4 == 'a') {
                            acertos++
                        }

                        leitor.question('Qual foi o primeiro milagre de Jesus descrito na biblia?\n (a) Cura do leproso\n (b) Cura do cego\n (c) Transformação da agua em vinho\n (d) Multiplicação dos pães\n>', (respostaGeraldo5) => {
                            if (respostaGeraldo5 == 'c') {
                                acertos++
                            }

                            leitor.question('Qual foi o ano da criação da atual constituição brasileira?\n (a) 1958\n (b) 1988\n (c) 2000\n (d) 1962\n>', (respostaGeraldo6) => {
                                if (respostaGeraldo6 == 'b') {
                                    acertos++
                                }

                                console.log('Você acertou:', [acertos], 'obrigado por participar');
                                leitor.close();
                            })
                        })
                    })
                })
            })


        })
    }

    else if (nome == 'Giselle') {
        leitor.question('Qual foi o primeiro milagre de Jesus na biblia?\n (a) Transformação da agua em vinho\n (b) Cura de um cego\n (c) Cura do leproso\n (d) Multiplicação de pães\n>', (respostaGiselle1) => {
            if (respostaGiselle1 == 'a') {
                acertos++
            }

            leitor.question('O desfibrilador é um aparelho utilizado em hospitais ou em locais públicos. A desfibrilação elétrica de emergência é indicada em casos de:\n (a) Taquicardia atrial\n (b) Fibrilação atrial\n (c) Taquicardia ventricular sem pulso e fibrilação ventricular\n (d) Assistolia\n>', (respostaGiselle2) => {
                if (respostaGiselle2 == 'c') {
                    acertos++
                }

                leitor.question('Qual era o nome da irmã e do irmão de Moises?\n (a) Miriam e Calleb\n (b) Corá e Jeremias\n (c) Levi e Ruth\n (d) Arão e Miriam\n>', (respostaGiselle3) => {
                    if (respostaGiselle3 == 'd') {
                        acertos++
                    }

                    leitor.question('Qual a dose de ataque no uso de Amiodarona em uma PCR?\n (a) 350mg\n (b) 300mg\n (c)150mg\n (d) Nenhuma das anteriores\n>', (respostaGiselle4) => {
                        if (respostaGiselle4 == 'b') {
                            acertos++
                        }

                        leitor.question('Qual é o medicamento antagonista da morfina?\n (a) Adrenalina\n (b) Sulfato ferroso\n (c) Naloxona\n (d) Propafenona\n>', (respostaGiselle5) => {
                            if (respostaGiselle5 == 'c') {
                                acertos++
                            }

                            leitor.question('Em qual livro da Biblia do novo testamento é apresentado aos leitores da carta argumentos em defesa da Divindade de Jesus?\n (a) Romanos\n (b) Hebreus\n (c) Corintios\n (d) Efesios\n>', (respostaGiselle6) => {
                                if (respostaGiselle6 == 'b') {
                                    acertos++
                                }

                                if (acertos >= 5) {
                                    console.log('Parabéns meu amor, você é incrivel, acertou:', [acertos])
                                }

                                else if (acertos >= 4) {
                                    console.log('Nada mal, mas podemos melhorar, você acertou:', [acertos])
                                }

                                else if (acertos <= 3) {
                                    console.log('Eita, foi mal nessa em, mas não se preocupe, seu noivo te ajuda, você acertou:', [acertos])
                                }

                                leitor.close()


                            })
                        })
                    })
                })
            })
        })
    }

    else if (nome != nomes) {
        leitor.question('No principio era o verbo, e o verbo estava com Deus, e o verbo era Deus\n João 1:1\n A quem esse trecho descrito na biblia se refere?\n (a) Jesus\n (b) Maria\n (c) João\n (d) Moises\n>', (respostaDiversa1) => {
            if (respostaDiversa1 == 'a') {
                acertos++
            }

            leitor.question('Quantos continentes existem no mundo?\n (a) 5\n (b) 6\n (c) 7\n (d) 4\n>', (respostaDiversa2) => {
                if (respostaDiversa2 == 'b') {
                    acertos++
                }

                leitor.question('Qual foi o primeiro animal enviado ao espaço?\n (a) Cachorro\n (b) Macaco\n (c) Mosca\n (d) Camaleão\n>', (respostaDiversa3) => {
                    if (respostaDiversa3 == 'a') {
                        acertos++
                    }

                    leitor.question('Quais são os Paises que representam a sigla do bloco economico BRICS?\n (a) Brunei, Russia, China, Sudão\n (b) Butão, Russia, Chile, Somalia\n (c) Brasil, Russia, India, China, Africa do Sul\n (d) Brasil, Russia, India, Chile, Singapura\n>', (respostaDiversa4) => {
                        if (respostaDiversa4 == 'c') {
                            acertos++
                        }

                        leitor.question('Quem foi Paulo Freire?\n (a) Biologo e empresário\n (b) Arquiteto que projetou Brasilia\n (c) Fisico ganhador do Nobel da Paz\n (d) Educador e Filósofo Brasileiro\n>', (respostaDiversa5) => {
                            if (respostaDiversa5 == 'd') {
                                acertos++
                            }

                            leitor.question('Qual o satelite natural da terra?\n (a) Marte\n (b) Lua\n (c) Jupiter\n (d) Galaxia de Andromeda\n>', (respostaDiversa6) => {
                                if (respostaDiversa6 == 'b') {
                                    acertos++
                                }

                                console.log('Obrigado por participar, você acertou:', [acertos])
                                leitor.close
                            })
                        })
                    })
                })
            })
        })
    }

})