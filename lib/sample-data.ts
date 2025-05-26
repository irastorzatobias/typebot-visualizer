import type { TypebotData } from "@/types/typebot"

export const typebotData: TypebotData = {
    "typebot": {
      "version": "6.1",
      "id": "odxx8oon13ofnh1c9uoh1agk",
      "name": "C2R - Híbrido",
      "events": [
        {
          "id": "sc7fzct584vyrmxm8xtyfak3",
          "outgoingEdgeId": "q6dvpfckkbjvuxj9z543reas",
          "graphCoordinates": {
            "x": 39.02,
            "y": -659.45
          },
          "type": "start"
        }
      ],
      "groups": [
        {
          "id": "udr3t49cli28d9xy7yydal9t",
          "title": "Grupo Inicio IA",
          "graphCoordinates": {
            "x": 705.32,
            "y": -449.33
          },
          "blocks": [
            {
              "id": "x7jqjrffz1myuti3u13ztubk",
              "type": "Set variable",
              "options": {
                "variableId": "ul6lh66r4nymq2yo7dalzm5o",
                "expressionToEvaluate": "let result = {{responseName}}.trim();\nreturn result;\n\n",
                "isCode": true
              }
            },
            {
              "id": "lwsw97izi667yi2mvm9tjorg",
              "type": "Set variable",
              "options": {
                "variableId": "x299hn2yxjfkonoh0wrpme8s",
                "isExecutedOnClient": false,
                "expressionToEvaluate": "0",
                "isCode": true
              }
            },
            {
              "id": "ws131kz3bj7f3wh012yx71ny",
              "type": "dify-ai",
              "options": {
                "credentialsId": "cm7jhz7z7000eeot73p9ovpao",
                "action": "Create Chat Message",
                "query": "{{respuestaText}}",
                "conversationVariableId": "ls3edtidh6j6d493m12leees",
                "user": "typebot",
                "inputs": [],
                "responseMapping": [
                  {
                    "variableId": "txp3b8i5nglv0ejoeim3yq55"
                  }
                ]
              }
            },
            {
              "id": "cmlktcb1464clhmrh5zsmm9d",
              "outgoingEdgeId": "chvyq46ggj3t7mhknbp4tn6c",
              "type": "Condition",
              "items": [
                {
                  "id": "g0i30j1vfmvexysy5yxprcqr",
                  "outgoingEdgeId": "yvwz512k3knbocf7uph2dt4j",
                  "content": {
                    "comparisons": [
                      {
                        "id": "anx8wq8q8wf39bezjsgeylzc",
                        "variableId": "x299hn2yxjfkonoh0wrpme8s",
                        "comparisonOperator": "Equal to",
                        "value": "0"
                      }
                    ]
                  }
                },
                {
                  "id": "ypct2v18ntphkkqp3x338txn",
                  "outgoingEdgeId": "ceh4gqopjln9st4i8ady7633",
                  "content": {
                    "comparisons": [
                      {
                        "id": "xnkfv6axjnycyyuplwfwuamb",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "value": "CIERRECONVERSACION"
                      }
                    ]
                  }
                },
                {
                  "id": "m4w3m88pzqdvruued4wq2byc",
                  "outgoingEdgeId": "qx64j30tdu9558nooqk34p43",
                  "content": {
                    "comparisons": [
                      {
                        "id": "rwasvfwe0nulgwma0kb1n3ae",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "ATENCIONCLIENTE"
                      }
                    ]
                  }
                },
                {
                  "id": "hokvs4gbqcd45sdho5ligvgs",
                  "outgoingEdgeId": "l7b6hfboml61wihhfi2mmq03",
                  "content": {
                    "comparisons": [
                      {
                        "id": "z6fj77pea84bk1drucwcuxyg",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "RECLAMO"
                      }
                    ]
                  }
                },
                {
                  "id": "xuq7rr511jmrfd00i7uz545o",
                  "outgoingEdgeId": "wqd827ce1h0b0i5mkmjq2sfr",
                  "content": {
                    "comparisons": [
                      {
                        "id": "musfhcrem2guo8d1x15m4zvp",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "PAGO"
                      }
                    ]
                  }
                },
                {
                  "id": "xn07kmv3ala28bsnkds2hdym",
                  "outgoingEdgeId": "agqxlaartj6hmrz5laaplxje",
                  "content": {
                    "comparisons": [
                      {
                        "id": "ptyw3elgw9nzuwaw6hg61nng",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "CAMPAÑA"
                      }
                    ]
                  }
                },
                {
                  "id": "ksi6autrokl93qq3av1zpc3j",
                  "outgoingEdgeId": "yyght7sgybbhm72hsugydwte",
                  "content": {
                    "comparisons": [
                      {
                        "id": "joj30kfxjl5a7vmaorma4t2s",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "BLOQUEO"
                      }
                    ]
                  }
                },
                {
                  "id": "i47sxydhwqi8nhs9m6mp0kjn",
                  "outgoingEdgeId": "gsgjuvjsw9q6vmbbr2ihtq0g",
                  "content": {
                    "comparisons": [
                      {
                        "id": "dhw9aqhxb9hckqmlrq4azwd3",
                        "variableId": "txp3b8i5nglv0ejoeim3yq55",
                        "comparisonOperator": "Equal to",
                        "value": "REUNION"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "pwlt16dfyxz9tw91aodch92d",
          "title": "Grupo Generativo Respuesta",
          "graphCoordinates": {
            "x": 269,
            "y": 293
          },
          "blocks": [
            {
              "id": "qh6w2ogtu973c02fu7kl2hdh",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "{{responseDify}}"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "veh8li99y8bo43ehjmf4mlmr",
              "type": "Set variable",
              "options": {
                "variableId": "x299hn2yxjfkonoh0wrpme8s",
                "isExecutedOnClient": false,
                "expressionToEvaluate": "contador = {{var_contador}}\n  \ncontador += 1\n\nreturn contador",
                "isCode": true
              }
            },
            {
              "id": "l2sfrscmhwe6vzp7da8g8evs",
              "outgoingEdgeId": "g2l2b7mc7atk38f4101ugcqe",
              "type": "text input",
              "options": {
                "variableId": "d3rqy6sfgx9ny8s2bs10a161"
              }
            }
          ]
        },
        {
          "id": "w6lrdp2eyt1m5ivz07492nnj",
          "title": "Variable de Inicio",
          "graphCoordinates": {
            "x": 317.16,
            "y": -719.01
          },
          "blocks": [
            {
              "id": "befoh2t52vpokrc323mwvsls",
              "type": "Set variable",
              "options": {
                "variableId": "ls3edtidh6j6d493m12leees",
                "type": "Custom",
                "expressionToEvaluate": "{{crypto.randomUUID()}}",
                "isCode": true
              }
            },
            {
              "id": "ruyi8tdez22wyq5wcuyccbg1",
              "outgoingEdgeId": "ygn2oe3fmhfa7r76wifcyt6v",
              "type": "dify-ai",
              "options": {
                "credentialsId": "cm6i4uumn005kvas3q05ek4ln",
                "action": "Create Chat Message",
                "query": "{{conversationName}}",
                "user": "bot-experiment",
                "responseMapping": [
                  {
                    "variableId": "ul6lh66r4nymq2yo7dalzm5o"
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "hbhbopyqt14xx2n57oz1ze82",
          "title": "Jump Generativo Respuesta",
          "graphCoordinates": {
            "x": 950.23,
            "y": 874.85
          },
          "blocks": [
            {
              "id": "smzq1rfktbuyk3uyuk3iz0vw",
              "type": "Jump",
              "options": {
                "groupId": "pwlt16dfyxz9tw91aodch92d",
                "blockId": "qh6w2ogtu973c02fu7kl2hdh"
              }
            }
          ]
        },
        {
          "id": "cs0g7uk932l9uaw3f8m6ysyu",
          "title": "CONTADOR",
          "graphCoordinates": {
            "x": 1348.78,
            "y": -714.18
          },
          "blocks": [
            {
              "id": "uurwhjk46aw5lwhirgi8ed5a",
              "type": "Set variable",
              "options": {
                "variableId": "x299hn2yxjfkonoh0wrpme8s",
                "isExecutedOnClient": false,
                "expressionToEvaluate": "1",
                "isCode": true
              }
            },
            {
              "id": "i0uywd5n66jndv0e734ta9ia",
              "type": "Jump",
              "options": {
                "groupId": "ziny4j7vdtkwmbl7ez52htoq",
                "blockId": "x8ejr0rtnqfnavcmt4jig2l1"
              }
            }
          ]
        },
        {
          "id": "xpqvzgpupmmhjgvt6k420rva",
          "title": "CIERRECONVERSACION",
          "graphCoordinates": {
            "x": 1682.18,
            "y": -211.49
          },
          "blocks": [
            {
              "id": "luib4wyoigpae5riagwdpxbo",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "💬 "
                      },
                      {
                        "text": "\"Voy a pasarte con un asesor para que te ayude mejor. Dame un momento.\"",
                        "italic": true
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "x7ckzhgmturmuyu7wz9v9hw4",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "ziny4j7vdtkwmbl7ez52htoq",
          "title": "Detección Nombre",
          "graphCoordinates": {
            "x": 1168.622774345378,
            "y": -1565.750999647829
          },
          "blocks": [
            {
              "id": "g2i3mcb0el47o9ayb45tb1vt",
              "outgoingEdgeId": "pbn4tzcqx62t0zgzrtbtvruh",
              "type": "Condition",
              "items": [
                {
                  "id": "voyh0gg00oxasvih28lwmjno",
                  "outgoingEdgeId": "czll835d4ry0sl3d779dz3nq",
                  "content": {
                    "logicalOperator": "OR",
                    "comparisons": [
                      {
                        "id": "zy0jhlr7kmtymho6qwkr21bd",
                        "variableId": "ul6lh66r4nymq2yo7dalzm5o",
                        "comparisonOperator": "Equal to",
                        "value": "NO"
                      }
                    ]
                  }
                },
                {
                  "id": "gcdjxi9omy8c776evqa105ld",
                  "outgoingEdgeId": "ybfcew8ls57ec1ebklqg2g8w",
                  "content": {
                    "comparisons": [
                      {
                        "id": "itufviocbfx50vaoy1rbnfg4",
                        "variableId": "ul6lh66r4nymq2yo7dalzm5o",
                        "comparisonOperator": "Is empty"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "z4oy58t60i70f7h0osg5j3wy",
          "title": "Bienvenida SIN Nombre",
          "graphCoordinates": {
            "x": 1775.86,
            "y": -1720.08
          },
          "blocks": [
            {
              "id": "nd5jjgvzzhp12uoji8b5351n",
              "outgoingEdgeId": "liaz4i7wrxm7t9rhnd2hskbt",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "👋 Hola, gracias por comunicarte con Clic2Ring, Agencia de Marketing de Picallex."
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "x09tiwboqjyzg39yfl4onqji",
          "title": "Bienvenida CON Nombre",
          "graphCoordinates": {
            "x": 1795.87,
            "y": -1389.43
          },
          "blocks": [
            {
              "id": "uwd1ux757t6b9plufhi0ldyz",
              "type": "Set variable",
              "options": {
                "variableId": "ul6lh66r4nymq2yo7dalzm5o",
                "expressionToEvaluate": "let result = {{responseName}}.trim();\nreturn result;\n\n",
                "isCode": true
              }
            },
            {
              "id": "myk2xiu5596o8wniwui1a1yg",
              "type": "Set variable",
              "options": {
                "variableId": "ivne0yrjc032iyzqxppi0fub",
                "expressionToEvaluate": "let result = \"👋 Hola \"+ {{responseName}}.trim() + \"! , gracias por comunicarte con Clic2Ring, Agencia de Marketing de Picallex.\";\nreturn result;",
                "isCode": true
              }
            },
            {
              "id": "jozq6u8n5hpx1o8s0hnoy93j",
              "outgoingEdgeId": "moduz0tcgphh9k36zq5poyfu",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "{{welcomeMessage}}"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "r78efat7tnul1ehz773fyrm6",
          "title": "Grupo relevamiento",
          "graphCoordinates": {
            "x": 2387.6,
            "y": -1444.06
          },
          "blocks": [
            {
              "id": "s2fe8g5t0h85uaikvb046omq",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "👋 ¿En qué podemos ayudarte hoy? Por favor, selecciona una opción para seguir."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "g5j8pj3cattphrpkr91rklrw",
              "type": "choice input",
              "items": [
                {
                  "id": "glbwxw09i3f6upvmme6vmdfv",
                  "outgoingEdgeId": "minkot4xqurix4frzktm0lb5",
                  "content": "Reportar bloqueo DID"
                },
                {
                  "id": "j3uykdw8hm0rptexjioeq5rz",
                  "outgoingEdgeId": "k8oj8j14oeclsucidtepox0n",
                  "content": "Programar reunión"
                },
                {
                  "id": "tp287919bny60x52t1nc4s5v",
                  "outgoingEdgeId": "rzq2qcn5ue43fwzt4aqkqn8j",
                  "content": "Nuevo método de pago"
                },
                {
                  "id": "thdt9mz916zipcxntarjaaca",
                  "outgoingEdgeId": "hz65s10jz7wluo33be63r3ij",
                  "content": "Campañas: info/cambios"
                },
                {
                  "id": "dfeuaiijg1gvnf5udzn9z949",
                  "outgoingEdgeId": "r4my6dck22kh2fuv4bx2xo53",
                  "content": "Otra consulta"
                },
                {
                  "id": "w233dc2plvbui4flact670r3",
                  "outgoingEdgeId": "c5tv2hxowyb6nl3jkc4ouben",
                  "content": "--IA--"
                }
              ]
            }
          ]
        },
        {
          "id": "crrn2m1f2iv7rgq7k2r2tv3r",
          "title": "Group #11",
          "graphCoordinates": {
            "x": 2357.77,
            "y": -490.49
          },
          "blocks": [
            {
              "id": "b5o8maxlxwepnlzurpyzcap1",
              "type": "Jump",
              "options": {
                "groupId": "pwlt16dfyxz9tw91aodch92d",
                "blockId": "qh6w2ogtu973c02fu7kl2hdh"
              }
            }
          ]
        },
        {
          "id": "a5cu8wcs9d93r6wejfle7s59",
          "title": "Grupo bloqueo",
          "graphCoordinates": {
            "x": 2778.81,
            "y": -1840.81
          },
          "blocks": [
            {
              "id": "v1shx1i6nm4r93qscawy48ad",
              "type": "Webhook",
              "options": {
                "isAdvancedConfig": true,
                "isCustomBody": true,
                "webhook": {
                  "url": "https://api.picallex.com/whatsapp/preleads/label",
                  "body": "{\n    \"label_id\": \"2631\",\n    \"section_id\": \"25\",\n    \"prelead_id\": \"{{preLeadId}}\"\n}"
                }
              }
            },
            {
              "id": "xpu7hlz1wg2faaa2278z19rf",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Por favor, indícanos el número bloqueado para notificar al equipo y apagar las campañas."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "n2kfrd4pxo78h1zdifgw6aat",
              "type": "text input",
              "options": {
                "variableId": "q1y487w1o7h8bv84133t9mh8"
              }
            },
            {
              "id": "szz0asa2utwsk5l39msjye74",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "ypy5llip2bi2kz46tpgz9gn8",
          "title": "Grupo reunion",
          "graphCoordinates": {
            "x": 3504.84,
            "y": -1383.48
          },
          "blocks": [
            {
              "id": "furn0de6394t1k29igpnlp57",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "¿Con quién del equipo te gustaría programar otra reunión? Si deseas comunicarte con otra persona del equipo, déjanos saber."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "tj4xand64u9759uauzxxvzwq",
              "type": "choice input",
              "items": [
                {
                  "id": "pf5w3lw7jjg5bxh9yiqcdmfx",
                  "outgoingEdgeId": "nn830fycs95gmzsq3r2ewkdg",
                  "content": "Mauro"
                },
                {
                  "id": "kp4xkefrut9nktke8opa0kih",
                  "outgoingEdgeId": "p90hk3g8w1r0psovc9ittfty",
                  "content": "Nicolás"
                },
                {
                  "id": "orzwxdflzn9m2a2yiwg3gaea",
                  "outgoingEdgeId": "bgfhjazgraqwi6t9t2ssh2vw",
                  "content": "Otra persona"
                },
                {
                  "id": "tpvkevd9nej7rta7f9wmv3be",
                  "outgoingEdgeId": "ezpxdvko75yc0nn27mp5o08v",
                  "content": "--IA--"
                }
              ]
            }
          ]
        },
        {
          "id": "u5vnxdm3wpppvm6sr1cjfca7",
          "title": "Group #14",
          "graphCoordinates": {
            "x": 3811.03,
            "y": -790.01
          },
          "blocks": [
            {
              "id": "oxv0lkt7h83ugorx6bl6a3z6",
              "type": "Jump",
              "options": {
                "groupId": "pwlt16dfyxz9tw91aodch92d",
                "blockId": "qh6w2ogtu973c02fu7kl2hdh"
              }
            }
          ]
        },
        {
          "id": "z7mtmz685oxij65pmzhpuc6b",
          "title": "Nuevo metodo de pago",
          "graphCoordinates": {
            "x": 3173.15,
            "y": -1190.35
          },
          "blocks": [
            {
              "id": "u6is155v53jqsp7hrzcpujre",
              "type": "Webhook",
              "options": {
                "isAdvancedConfig": true,
                "isCustomBody": true,
                "webhook": {
                  "url": "https://api.picallex.com/whatsapp/preleads/label",
                  "body": "{\n    \"label_id\": \"2634\",\n    \"section_id\": \"25\",\n    \"prelead_id\": \"{{preLeadId}}\"\n}"
                }
              }
            },
            {
              "id": "idam6p8kzzj3e3cwuxl4bqkw",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Enseguida te enviaremos un DocuSign para actualizar tu método de pago. Déjanos saber a qué correo debemos enviarlo."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "f33vdk67ycajnz3p2kvqosda",
              "type": "email input",
              "options": {
                "variableId": "ob2zy7bl4p95l49x9mq0zhcu"
              }
            },
            {
              "id": "f9kjla9yhm0gfj9eb8i9kes7",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "oo371d6tw5hs71ackby0byvy",
          "title": "Grupo campañas",
          "graphCoordinates": {
            "x": 3130.4,
            "y": -689.32
          },
          "blocks": [
            {
              "id": "dh49rvz7nwpr1yu67s0tb1bt",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Por favor, indícanos la información o acción que necesitas"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "e5m9pxfya3xdq6i8evwok63o",
              "type": "choice input",
              "items": [
                {
                  "id": "ak77sdns5ceyt6zdjuh9yjuk",
                  "outgoingEdgeId": "sh35au0kq2mwsc3r01r7i1lg",
                  "content": "Detener campañas"
                },
                {
                  "id": "yoht0o1pz4lgul25dp4kq70t",
                  "outgoingEdgeId": "va26bf6p4q4by4coabit3lrn",
                  "content": "Estado de campaña"
                },
                {
                  "id": "vbz7tbi4ie3zci4s6z73pb5o",
                  "outgoingEdgeId": "dib5kcjr9pyii7hursgzdcbw",
                  "content": "Aplicar cambios"
                },
                {
                  "id": "qvn6h43az6rf3suub9dgn3k0",
                  "outgoingEdgeId": "bpo1drsv5gxewtvy38lhgq1h",
                  "content": "--IA--"
                }
              ]
            }
          ]
        },
        {
          "id": "c9xyda4l7xk3jz5c0jflbojt",
          "title": "Group #17",
          "graphCoordinates": {
            "x": 3284.95,
            "y": 83.45
          },
          "blocks": [
            {
              "id": "czbf7zqpril9rf3zwkh12zvd",
              "type": "Jump",
              "options": {
                "groupId": "pwlt16dfyxz9tw91aodch92d",
                "blockId": "qh6w2ogtu973c02fu7kl2hdh"
              }
            }
          ]
        },
        {
          "id": "m5t1lssxrx1qquqp6flh0gen",
          "title": "Group #4",
          "graphCoordinates": {
            "x": 4143.09,
            "y": -1834.03
          },
          "blocks": [
            {
              "id": "atrhnpynms8d9pb9nn5totvm",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Para agendar una reunión con Mauro, por favor, ingresa a"
                      }
                    ]
                  },
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": ""
                      },
                      {
                        "url": "https://calendar.app.google/Q61TNw5SntjLaxWP9",
                        "type": "a",
                        "target": "_blank",
                        "children": [
                          {
                            "text": "Agendar reunión aquí"
                          }
                        ]
                      },
                      {
                        "text": ". Selecciona la fecha y hora que mejor se adapte a tu horario y nos pondremos en contacto contigo para confirmar."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "cx90rpodeh9rebksp5tz463e",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "fxc5jzk7ud2x01xny15xnnb1",
          "title": "Group #5",
          "graphCoordinates": {
            "x": 4148.77,
            "y": -1399.22
          },
          "blocks": [
            {
              "id": "esoigzyt5peeatwvs2l7h4f6",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Para agendar una reunión con Nicolás, por favor, ingresa a"
                      }
                    ]
                  },
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": ""
                      },
                      {
                        "url": "https://calendar.app.google/E5oRiGzZKVwGMfJa7",
                        "type": "a",
                        "target": "_blank",
                        "children": [
                          {
                            "text": "Agendar reunión aquí"
                          }
                        ]
                      },
                      {
                        "text": ". Selecciona la fecha y hora que mejor se adapte a tu horario y nos pondremos en contacto contigo para confirmar."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "z8kzcxbzp59kv74hawpuwxq5",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "xwabqmdxjnc76yt2tvfsyq67",
          "title": "Group #6",
          "graphCoordinates": {
            "x": 4172.03,
            "y": -901.86
          },
          "blocks": [
            {
              "id": "v61i033b81abpcnudxbiqfw1",
              "type": "Webhook",
              "options": {
                "isAdvancedConfig": true,
                "isCustomBody": true,
                "webhook": {
                  "url": "https://api.picallex.com/whatsapp/preleads/label",
                  "body": "{\n    \"label_id\": \"2632\",\n    \"section_id\": \"25\",\n    \"prelead_id\": \"{{preLeadId}}\"\n}"
                }
              }
            },
            {
              "id": "mz56ei8iy6ize4a6d17obm5q",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Indícanos con quién deseas reunirte"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "hyl0o7y0xxkg6gi945a00pnj",
              "type": "text input",
              "options": {
                "variableId": "ko18mgny80raskblwvp9oul0"
              }
            },
            {
              "id": "r7e1pqj6m0e6pc6nyqxdwu2f",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "cehhvu6lt3j13gzcye3vn2cx",
          "title": "Group #9",
          "graphCoordinates": {
            "x": 3876.22,
            "y": -500.5
          },
          "blocks": [
            {
              "id": "sbfqkk22x6a3kv0rucoaa15v",
              "type": "Webhook",
              "options": {
                "isAdvancedConfig": true,
                "isCustomBody": true,
                "webhook": {
                  "url": "https://api.picallex.com/whatsapp/preleads/label",
                  "body": "{\n    \"label_id\": \"2633\",\n    \"section_id\": \"25\",\n    \"prelead_id\": \"{{preLeadId}}\"\n}"
                }
              }
            },
            {
              "id": "e824h6yohw98iy1065ez9b0m",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Recibimos tu solicitud. Las campañas serán apagadas de inmediato. ¿Podrías indicarnos el motivo?"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "ih7moiabzggl5z10sbw1slbn",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "mx9qykzk8r9m0jqtz47k2w5c",
          "title": "Group #10 (1)",
          "graphCoordinates": {
            "x": 3894.37,
            "y": -128.84
          },
          "blocks": [
            {
              "id": "idmgfmuw9rc49hab7cze4zpb",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Gracias, verificaremos el estado de tus campañas publicitarias y te brindaremos una respuesta tan pronto como sea posible."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "ct9pbtn28ns02sobaxjtzg64",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "qco1wtg5li0vqiavc3njokmj",
          "title": "Group #11 (1)",
          "graphCoordinates": {
            "x": 3900.09,
            "y": 216.92
          },
          "blocks": [
            {
              "id": "r3pr08t8m3e3cgjs30ug3oo8",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "¿Qué cambios deseas aplicar en tus campañas?"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "w96j5ynku14tk60yo013sjzf",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "djgvl35axk1x53wu3e0th8dr",
          "title": "Grupo consulta",
          "graphCoordinates": {
            "x": 2461.82,
            "y": -132.94
          },
          "blocks": [
            {
              "id": "o2d21kgqq5rchl7t8oeaeyig",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Por favor, déjame saber cuál es tu consulta"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "m3mi7kvgfyx8w1zu4tcnry4k",
              "outgoingEdgeId": "ul4lr9fvbbsrrzpqju8h42pn",
              "type": "text input",
              "options": {
                "variableId": "vni5ak2zkb7v4c2jn32okhg4w"
              }
            }
          ]
        },
        {
          "id": "tai94frw9ru04jj46ha7lq7m",
          "title": "Group #26",
          "graphCoordinates": {
            "x": 2846.25,
            "y": -144.74
          },
          "blocks": [
            {
              "id": "v1az1p0jjuazoqqo42ed1i90",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "Recibido, en un momento uno de nuestros agentes se comunicará contigo para asistirte."
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "dubvmnow5a0zofyf5wrfliz8",
              "type": "text",
              "content": {
                "richText": [
                  {
                    "type": "p",
                    "children": [
                      {
                        "text": "--FINISH--"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "zncx6ecchy6j45efmh5cq4r4",
          "title": "Group #26",
          "graphCoordinates": {
            "x": 1497.248733367966,
            "y": 178.1129212286276
          },
          "blocks": [
            {
              "id": "mqnvu00jsq59d4197bb8y2sa",
              "type": "Jump",
              "options": {
                "groupId": "z7mtmz685oxij65pmzhpuc6b",
                "blockId": "u6is155v53jqsp7hrzcpujre"
              }
            }
          ]
        },
        {
          "id": "cv7oy2o2kkxbi6ivxdckihu4",
          "title": "Group #27",
          "graphCoordinates": {
            "x": 1562.43,
            "y": 407.43
          },
          "blocks": [
            {
              "id": "zb7psbuyiwht3mywap4zy5s4",
              "type": "Jump",
              "options": {
                "groupId": "oo371d6tw5hs71ackby0byvy"
              }
            }
          ]
        },
        {
          "id": "og5rx6oa3ttbkri7ryccckik",
          "title": "Group #28",
          "graphCoordinates": {
            "x": 1950.15,
            "y": 564.58
          },
          "blocks": [
            {
              "id": "ruehxacybi5sxdia4y428ffa",
              "type": "Jump",
              "options": {
                "groupId": "a5cu8wcs9d93r6wejfle7s59",
                "blockId": "v1shx1i6nm4r93qscawy48ad"
              }
            }
          ]
        },
        {
          "id": "s4gx469nwoi6zyjf0lhjc4za",
          "title": "Group #29",
          "graphCoordinates": {
            "x": 1558.860139959656,
            "y": 732.6155805538364
          },
          "blocks": [
            {
              "id": "mcx7425uefq5xdo8zbd42x58",
              "type": "Jump",
              "options": {
                "groupId": "ypy5llip2bi2kz46tpgz9gn8",
                "blockId": "furn0de6394t1k29igpnlp57"
              }
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "g2l2b7mc7atk38f4101ugcqe",
          "from": {
            "blockId": "l2sfrscmhwe6vzp7da8g8evs"
          },
          "to": {
            "groupId": "udr3t49cli28d9xy7yydal9t",
            "blockId": "ws131kz3bj7f3wh012yx71ny"
          }
        },
        {
          "id": "ygn2oe3fmhfa7r76wifcyt6v",
          "from": {
            "blockId": "ruyi8tdez22wyq5wcuyccbg1"
          },
          "to": {
            "groupId": "udr3t49cli28d9xy7yydal9t"
          }
        },
        {
          "id": "q6dvpfckkbjvuxj9z543reas",
          "from": {
            "eventId": "sc7fzct584vyrmxm8xtyfak3"
          },
          "to": {
            "groupId": "w6lrdp2eyt1m5ivz07492nnj"
          }
        },
        {
          "id": "yvwz512k3knbocf7uph2dt4j",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "g0i30j1vfmvexysy5yxprcqr"
          },
          "to": {
            "groupId": "cs0g7uk932l9uaw3f8m6ysyu"
          }
        },
        {
          "id": "ceh4gqopjln9st4i8ady7633",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "ypct2v18ntphkkqp3x338txn"
          },
          "to": {
            "groupId": "xpqvzgpupmmhjgvt6k420rva"
          }
        },
        {
          "id": "qx64j30tdu9558nooqk34p43",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "m4w3m88pzqdvruued4wq2byc"
          },
          "to": {
            "groupId": "xpqvzgpupmmhjgvt6k420rva"
          }
        },
        {
          "id": "chvyq46ggj3t7mhknbp4tn6c",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d"
          },
          "to": {
            "groupId": "hbhbopyqt14xx2n57oz1ze82"
          }
        },
        {
          "id": "czll835d4ry0sl3d779dz3nq",
          "from": {
            "blockId": "g2i3mcb0el47o9ayb45tb1vt",
            "itemId": "voyh0gg00oxasvih28lwmjno"
          },
          "to": {
            "groupId": "z4oy58t60i70f7h0osg5j3wy"
          }
        },
        {
          "id": "ybfcew8ls57ec1ebklqg2g8w",
          "from": {
            "blockId": "g2i3mcb0el47o9ayb45tb1vt",
            "itemId": "gcdjxi9omy8c776evqa105ld"
          },
          "to": {
            "groupId": "z4oy58t60i70f7h0osg5j3wy"
          }
        },
        {
          "id": "pbn4tzcqx62t0zgzrtbtvruh",
          "from": {
            "blockId": "g2i3mcb0el47o9ayb45tb1vt"
          },
          "to": {
            "groupId": "x09tiwboqjyzg39yfl4onqji"
          }
        },
        {
          "id": "liaz4i7wrxm7t9rhnd2hskbt",
          "from": {
            "blockId": "nd5jjgvzzhp12uoji8b5351n"
          },
          "to": {
            "groupId": "r78efat7tnul1ehz773fyrm6"
          }
        },
        {
          "id": "moduz0tcgphh9k36zq5poyfu",
          "from": {
            "blockId": "jozq6u8n5hpx1o8s0hnoy93j"
          },
          "to": {
            "groupId": "r78efat7tnul1ehz773fyrm6"
          }
        },
        {
          "id": "c5tv2hxowyb6nl3jkc4ouben",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "w233dc2plvbui4flact670r3"
          },
          "to": {
            "groupId": "crrn2m1f2iv7rgq7k2r2tv3r"
          }
        },
        {
          "id": "minkot4xqurix4frzktm0lb5",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "glbwxw09i3f6upvmme6vmdfv"
          },
          "to": {
            "groupId": "a5cu8wcs9d93r6wejfle7s59"
          }
        },
        {
          "id": "k8oj8j14oeclsucidtepox0n",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "j3uykdw8hm0rptexjioeq5rz"
          },
          "to": {
            "groupId": "ypy5llip2bi2kz46tpgz9gn8"
          }
        },
        {
          "id": "ezpxdvko75yc0nn27mp5o08v",
          "from": {
            "blockId": "tj4xand64u9759uauzxxvzwq",
            "itemId": "tpvkevd9nej7rta7f9wmv3be"
          },
          "to": {
            "groupId": "u5vnxdm3wpppvm6sr1cjfca7"
          }
        },
        {
          "id": "rzq2qcn5ue43fwzt4aqkqn8j",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "tp287919bny60x52t1nc4s5v"
          },
          "to": {
            "groupId": "z7mtmz685oxij65pmzhpuc6b"
          }
        },
        {
          "id": "hz65s10jz7wluo33be63r3ij",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "thdt9mz916zipcxntarjaaca"
          },
          "to": {
            "groupId": "oo371d6tw5hs71ackby0byvy"
          }
        },
        {
          "id": "bpo1drsv5gxewtvy38lhgq1h",
          "from": {
            "blockId": "e5m9pxfya3xdq6i8evwok63o",
            "itemId": "qvn6h43az6rf3suub9dgn3k0"
          },
          "to": {
            "groupId": "c9xyda4l7xk3jz5c0jflbojt"
          }
        },
        {
          "id": "nn830fycs95gmzsq3r2ewkdg",
          "from": {
            "blockId": "tj4xand64u9759uauzxxvzwq",
            "itemId": "pf5w3lw7jjg5bxh9yiqcdmfx"
          },
          "to": {
            "groupId": "m5t1lssxrx1qquqp6flh0gen"
          }
        },
        {
          "id": "p90hk3g8w1r0psovc9ittfty",
          "from": {
            "blockId": "tj4xand64u9759uauzxxvzwq",
            "itemId": "kp4xkefrut9nktke8opa0kih"
          },
          "to": {
            "groupId": "fxc5jzk7ud2x01xny15xnnb1"
          }
        },
        {
          "id": "bgfhjazgraqwi6t9t2ssh2vw",
          "from": {
            "blockId": "tj4xand64u9759uauzxxvzwq",
            "itemId": "orzwxdflzn9m2a2yiwg3gaea"
          },
          "to": {
            "groupId": "xwabqmdxjnc76yt2tvfsyq67"
          }
        },
        {
          "id": "sh35au0kq2mwsc3r01r7i1lg",
          "from": {
            "blockId": "e5m9pxfya3xdq6i8evwok63o",
            "itemId": "ak77sdns5ceyt6zdjuh9yjuk"
          },
          "to": {
            "groupId": "cehhvu6lt3j13gzcye3vn2cx"
          }
        },
        {
          "id": "va26bf6p4q4by4coabit3lrn",
          "from": {
            "blockId": "e5m9pxfya3xdq6i8evwok63o",
            "itemId": "yoht0o1pz4lgul25dp4kq70t"
          },
          "to": {
            "groupId": "mx9qykzk8r9m0jqtz47k2w5c"
          }
        },
        {
          "id": "dib5kcjr9pyii7hursgzdcbw",
          "from": {
            "blockId": "e5m9pxfya3xdq6i8evwok63o",
            "itemId": "vbz7tbi4ie3zci4s6z73pb5o"
          },
          "to": {
            "groupId": "qco1wtg5li0vqiavc3njokmj"
          }
        },
        {
          "id": "r4my6dck22kh2fuv4bx2xo53",
          "from": {
            "blockId": "g5j8pj3cattphrpkr91rklrw",
            "itemId": "dfeuaiijg1gvnf5udzn9z949"
          },
          "to": {
            "groupId": "djgvl35axk1x53wu3e0th8dr"
          }
        },
        {
          "id": "ul4lr9fvbbsrrzpqju8h42pn",
          "from": {
            "blockId": "m3mi7kvgfyx8w1zu4tcnry4k"
          },
          "to": {
            "groupId": "tai94frw9ru04jj46ha7lq7m"
          }
        },
        {
          "id": "l7b6hfboml61wihhfi2mmq03",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "hokvs4gbqcd45sdho5ligvgs"
          },
          "to": {
            "groupId": "xpqvzgpupmmhjgvt6k420rva"
          }
        },
        {
          "id": "wqd827ce1h0b0i5mkmjq2sfr",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "xuq7rr511jmrfd00i7uz545o"
          },
          "to": {
            "groupId": "zncx6ecchy6j45efmh5cq4r4"
          }
        },
        {
          "id": "agqxlaartj6hmrz5laaplxje",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "xn07kmv3ala28bsnkds2hdym"
          },
          "to": {
            "groupId": "cv7oy2o2kkxbi6ivxdckihu4"
          }
        },
        {
          "id": "yyght7sgybbhm72hsugydwte",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "ksi6autrokl93qq3av1zpc3j"
          },
          "to": {
            "groupId": "og5rx6oa3ttbkri7ryccckik"
          }
        },
        {
          "id": "gsgjuvjsw9q6vmbbr2ihtq0g",
          "from": {
            "blockId": "cmlktcb1464clhmrh5zsmm9d",
            "itemId": "i47sxydhwqi8nhs9m6mp0kjn"
          },
          "to": {
            "groupId": "s4gx469nwoi6zyjf0lhjc4za"
          }
        }
      ],
      "variables": [
        {
          "id": "vni5ak2zkb7v4c2jn32okhg4w",
          "name": "consulta",
          "isSessionVariable": false
        },
        {
          "id": "ko18mgny80raskblwvp9oul0",
          "name": "agent",
          "isSessionVariable": false
        },
        {
          "id": "ob2zy7bl4p95l49x9mq0zhcu",
          "name": "email",
          "isSessionVariable": false
        },
        {
          "id": "q1y487w1o7h8bv84133t9mh8",
          "name": "phone",
          "isSessionVariable": false
        },
        {
          "id": "ivne0yrjc032iyzqxppi0fub",
          "name": "welcomeMessage",
          "isSessionVariable": true
        },
        {
          "id": "j6pr3zmtpg0wd7qplphveias",
          "name": "conversationName",
          "isSessionVariable": true
        },
        {
          "id": "d3rqy6sfgx9ny8s2bs10a161",
          "name": "respuestaText",
          "isSessionVariable": false
        },
        {
          "id": "txp3b8i5nglv0ejoeim3yq55",
          "name": "responseDify",
          "isSessionVariable": true
        },
        {
          "id": "x299hn2yxjfkonoh0wrpme8s",
          "name": "var_contador",
          "isSessionVariable": false
        },
        {
          "id": "ls3edtidh6j6d493m12leees",
          "name": "id_conversa",
          "isSessionVariable": false
        },
        {
          "id": "ul6lh66r4nymq2yo7dalzm5o",
          "name": "responseName",
          "isSessionVariable": false
        }
      ],
      "theme": {},
      "selectedThemeTemplateId": null,
      "settings": {},
      "createdAt": "2025-04-17T17:41:26.351Z",
      "updatedAt": "2025-04-25T18:40:30.668Z",
      "icon": null,
      "folderId": "cm5hj64oj0032vas3jtkaescz",
      "publicId": "inicio-hibrido-sin-solicitar-nombre-1-uoh1agk",
      "customDomain": null,
      "workspaceId": "cm336iujp0001vas3jup70yxn",
      "resultsTablePreferences": null,
      "isArchived": false,
      "isClosed": false,
      "whatsAppCredentialsId": null,
      "riskLevel": null
    },
    "currentUserMode": "write"
}
