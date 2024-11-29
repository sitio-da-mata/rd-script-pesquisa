<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona o elemento onde os campos serão inseridos
        var captchaField = document.querySelector(".field .math").parentNode;

        // Objeto com perguntas em HTML
        const questionsHTML = {
            regiao_lead: `
            <div class="field question">
                            <label>Em que região você está?<span>*</span></label>
                            <select name="regiao_lead" id="regiao_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sul">Sul</option>
                                <option value="Sudeste">Sudeste</option>
                                <option value="Norte">Norte</option>
                                <option value="Nordeste">Nordeste</option>
                                <option value="Centro-oeste">Centro-oeste</option>
                            </select>
                        </div>
        `,
            cargo_lead: `
            <div class="field question">
                            <label>Qual é o seu cargo?<span>*</span></label>
                            <select name="cargo_lead" id="cargo_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Dono de empresa">Dono de empresa</option>
                                <option value="Diretoria">Diretoria</option>
                                <option value="Técnico">Técnico</option>
                                <option value="Operacional">Operacional</option>
                            </select>
                        </div>
        `,
            decisor_lead: `
            <div class="field question">
                            <label>Você é o decisor da compra?<span>*</span></label>
                            <select name="decisor_lead" id="decisor_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            periodo_compra_lead: `
            <div class="field question">
                            <label>Para quando será a compra?<span>*</span></label>
                            <select name="periodo_compra_lead" id="periodo_compra_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Urgente">Urgente</option>
                                <option value="Médio Prazo">Médio Prazo</option>
                                <option value="Longo Prazo">Longo Prazo</option>
                                <option value="Indeterminado">Indeterminado</option>
                            </select>
                        </div>
        `,
            verba_projeto_lead: `
            <div class="field question">
                            <label>Qual a verba disponivel para o projeto?<span>*</span></label>
                            <select name="verba_projeto_lead" id="verba_projeto_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="- de R$ 1000">- de R$ 1000</option>
                                <option value="De R$ 1000 a R$ 4000">De R$ 1000 a R$ 4000</option>
                                <option value="De R$ 5000 a R$ 9000">De R$ 5000 a R$ 9000</option>
                                <option value="Acima de R$ 10.000">Acima de R$ 10.000</option>
                            </select>
                        </div>
        `,
            experiencia_lead: `
            <div class="field question">
                            <label>Tem experiência anterior com esse tipo de compra?<span>*</span></label>
                            <select name="experiencia_lead" id="experiencia_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            cotacao_lead: `
            <div class="field question">
                            <label>Já fez cotação anterior em outras empresas?<span>*</span></label>
                            <select name="cotacao_lead" id="cotacao_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            idade_lead: `
            <div class="field question">
                            <label>Qual sua idade?<span>*</span></label>
                            <select name="idade_lead" id="idade_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="18-25">18-25</option>
                                <option value="26-30">26-30</option>
                                <option value="30-45">30-45</option>
                                <option value="46-60+">46-60+</option>
                            </select>
                        </div>
        `,
            projetofechado_lead: `
            <div class="field question">
                            <label>Já tem projeto fechado com o cliente?<span>*</span></label>
                            <select name="projetofechado_lead" id="projetofechado_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            metrosprojeto_lead: `
            <div class="field question">
                            <label>Quantos metros quadrados tem o projeto?<span>*</span></label>
                            <select name="metrosprojeto_lead" id="metrosprojeto_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Menos de 200">Menos de 200</option>
                                <option value="De 200 a 999">De 200 a 999</option>
                                <option value="De 1000 a 2999">De 1000 a 2999</option>
                                <option value="Mais de 3000">Mais de 3000</option>
                            </select>
                        </div>
        `,
            execucaoprojeto_lead: `
            <div class="field question">
                            <label>Quer também execução do projeto?<span>*</span></label>
                            <select name="execucaoprojeto_lead" id="execucaoprojeto_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            anosempresa_lead: `
            <div class="field question">
                            <label>Quantos anos a sua empresa tem?<span>*</span></label>
                            <select name="anosempresa_lead" id="anosempresa_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Menos de 1">Menos de 1</option>
                                <option value="2 a 4">2 a 4</option>
                                <option value="5 a 9">5 a 9</option>
                                <option value="Mais de 10">Mais de 10</option>
                            </select>
                        </div>
        `,
            ramoempresa_lead: `
            <div class="field question">
                            <label>Qual o ramo da empresa?<span>*</span></label>
                            <select name="ramoempresa_lead" id="ramoempresa_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Incorporadora / Construtora">Incorporadora / Construtora</option>
                                <option value="Shoppings / Condomínio de luxo">Shoppings / Condomínio de luxo</option>
                                <option value="Indústria / Agro">Indústria / Agro</option>
                                <option value="Outro ramo">Outro ramo</option>
                            </select>
                        </div>
        `,
            compensacao_lead: `
            <div class="field question">
                            <label>Necessita fazer a compensação ou seria uma tomada de
                                preços?<span>*</span></label>
                            <select name="compensacao_lead" id="compensacao_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Fazer a compensação">Fazer a compensação</option>
                                <option value="Só tomada de preços">Só tomada de preços</option>
                            </select>
                        </div>
        `,
            cargoprefeitura_lead: `
            <div class="field question">
                            <label>Qual é seu cargo na prefeitura?<span>*</span></label>
                            <select name="cargoprefeitura_lead" id="cargoprefeitura_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Prefeito">Prefeito</option>
                                <option value="Comprador">Comprador</option>
                                <option value="Almoxarifado">Almoxarifado</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>
        `,
            orcamentodisponivel_lead: `
            <div class="field question">
                            <label>Qual é o orçamento disponível?<span>*</span></label>
                            <select name="orcamentodisponivel_lead" id="orcamentodisponivel_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Mais de 20 mil">Mais de 20 mil</option>
                                <option value="De 10 a 20 mil">De 10 a 20 mil</option>
                                <option value="Menos de 10 mil">Menos de 10 mil</option>
                                <option value="Menos de 2 mil">Menos de 2 mil</option>
                            </select>
                        </div>
        `,
            plantadesombra_lead: `
            <div class="field question">
                            <label>Gostaria de plantas de sombra?<span>*</span></label>
                            <select name="plantadesombra_lead" id="plantadesombra_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
        `,
            relacaocondominio_lead: `
            <div class="field question">
                            <label>Relação com condomínio<span>*</span></label>
                            <select name="relacaocondominio_lead" id="relacaocondominio_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Administração">Administração</option>
                                <option value="Síndico ou Zelador">Síndico ou Zelador</option>
                                <option value="Morador">Morador</option>
                                <option value="Nenhuma">Nenhuma</option>
                            </select>
                        </div>
        `,
            projetoaprovado_lead: `
            <div class="field question">
                            <label>O Projeto já foi aprovado em assembleia?<span>*</span></label>

                            <select name="projetoaprovado_lead" id="projetoaprovado_lead" class="form-control" required="required">
                                <option value="" selected="">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                                <option value="Não há necessidade">Não há necessidade</option>
                            </select>
                        </div>
        `,
            // Adicione mais perguntas aqui...
        };

        // Objeto com condições para exibir perguntas
        const conditions = {
            regiao_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Paisagista ou arquiteto",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento",
                        "Prefeitura em fase de compra",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            cargo_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento"
                    ]
                }
            ],
            decisor_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            periodo_compra_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Paisagista ou arquiteto",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento",
                        "Prefeitura em fase de compra",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            verba_projeto_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Paisagista ou arquiteto",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento"
                    ]
                }
            ],
            experiencia_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Amante de plantas e paisagismo",
                        "Prefeitura em fase de compra",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            cotacao_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Proprietário de casa de condomínio",
                        "Amante de plantas e paisagismo",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento",
                        "Prefeitura em fase de compra",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            idade_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Paisagista ou arquiteto",
                        "Amante de plantas e paisagismo",
                        "Proprietário de casa de condomínio",
                        "Fazendeiro ou dono de sítio",
                        "Procuro compensação ambiental",
                        "Dono de apartamento",
                        "Prefeitura em fase de compra",
                        "Síndico ou zelador de condomínio"
                    ]
                }
            ],
            projetofechado_lead: [
                {
                    field: "perfil_lead",
                    value: "Paisagista ou arquiteto"
                }
            ],
            metrosprojeto_lead: [
                {
                    field: "perfil_lead",
                    value: [
                        "Paisagista ou arquiteto",
                        "Proprietário de casa de condomínio"
                    ]
                }
            ],
            execucaoprojeto_lead: [
                {
                    field: "perfil_lead",
                    value: "Paisagista ou arquiteto"
                }
            ],
            anosempresa_lead: [
                {
                    field: "perfil_lead",
                    value: "Paisagista ou arquiteto"
                }
            ],
            ramoempresa_lead: [
                {
                    field: "perfil_lead",
                    value: "Amante de plantas e paisagismo"
                }
            ],
            compensacao_lead: [
                {
                    field: "perfil_lead",
                    value: "Procuro compensação ambiental"
                }
            ],
            cargoprefeitura_lead: [
                {
                    field: "perfil_lead",
                    value: "Prefeitura em fase de compra"
                }
            ],
            orcamentodisponivel_lead: [
                {
                    field: "perfil_lead",
                    value: "Prefeitura em fase de compra"
                }
            ],
            plantadesombra_lead: [
                {
                    field: "perfil_lead",
                    value: "Dono de apartamento"
                }
            ],
            relacaocondominio_lead: [
                {
                    field: "perfil_lead",
                    value: "Síndico ou zelador de condomínio"
                }
            ],
            projetoaprovado_lead: [
                {
                    field: "perfil_lead",
                    value: "Síndico ou zelador de condomínio"
                }
            ]
        };

        // Adiciona o HTML fixo antes do recaptcha
        var novosCamposHTML = `
            <div class="field input-question">
                <label>Em que perfil você mais se encaixa?<span>*</span></label>
                <select required name="perfil_lead" id="perfil_lead" class="form-control">
                    <option value="" selected>Selecione o seu perfil</option>
                    <option value="Paisagista ou arquiteto">Paisagista ou arquiteto</option>
                    <option value="Proprietário de casa de condomínio">Proprietário de casa de condomínio</option>
                    <option value="Construtor ou incorporador">Construtor ou incorporador</option>
                    <option value="Empresa de outros setores">Empresa de outros setores</option>
                    <option value="Síndico ou zelador de condomínio">Síndico ou zelador de condomínio</option>
                    <option value="Amante de plantas e paisagismo">Amante de plantas e paisagismo</option>
                    <option value="Procuro compensação ambiental">Procuro compensação ambiental</option>
                    <option value="Fazendeiro ou dono de sitio">Fazendeiro ou dono de sitio</option>
                    <option value="Dono de apartamento">Dono de apartamento</option>
                    <option value="Prefeitura em fase de compra">Prefeitura em fase de compra</option>
                </select>
            </div>
        `;
        captchaField.insertAdjacentHTML("beforebegin", novosCamposHTML);

        // Contêiner principal onde perguntas dinâmicas serão adicionadas
        var questionsContainer = document.createElement("div");
        questionsContainer.id = "dynamic-questions";
        captchaField.insertAdjacentElement("beforebegin", questionsContainer);

        // Atualiza perguntas com base na seleção
        function updateQuestions(selectedValue) {
            questionsContainer.innerHTML = ""; // Limpa perguntas existentes

            for (const [field, conditionList] of Object.entries(conditions)) {
                conditionList.forEach((condition) => {
                    if (condition.value.includes(selectedValue)) {
                        if (questionsHTML[field]) {
                            questionsContainer.insertAdjacentHTML("beforeend", questionsHTML[field]);
                        }
                    }
                });
            }
        }

        // Observa mudanças no campo perfil_lead
        const perfilLead = document.getElementById("perfil_lead");
        perfilLead.addEventListener("change", function (event) {
            const selectedValue = event.target.value;
            if (selectedValue) {
                updateQuestions(selectedValue);
            } else {
                questionsContainer.innerHTML = ""; // Limpa perguntas se nada for selecionado
            }
        });
    });
</script>
