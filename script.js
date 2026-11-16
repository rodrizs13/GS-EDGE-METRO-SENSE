
const CHANNEL_ID = "3581964";

const API_URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?results=20`;

let grafico;

// Busca os dados do ThingSpeak
async function buscarDados() {
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error("Erro na conexão");

        const dados = await resposta.json();
        const leituras = dados.feeds;

        if (!leituras || leituras.length === 0) {
            throw new Error("Nenhuma leitura encontrada");
        }

        const ultima = leituras[leituras.length - 1];

        const temperatura = Number(ultima.field1);
        const umidade = Number(ultima.field2);
        const estado = Number(ultima.field3);

        if (!Number.isFinite(temperatura) || !Number.isFinite(umidade)) {
            throw new Error("Leitura inválida");
        }

        document.getElementById("temperatura").textContent =
            temperatura.toFixed(1).replace(".", ",");

        document.getElementById("umidade").textContent =
            umidade.toFixed(1).replace(".", ",");

        document.getElementById("atualizacao").textContent =
            new Date(ultima.created_at).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit"
            });

        atualizarEstado(estado);
        atualizarGrafico(leituras);

        document.getElementById("conexao").textContent = "Conectado";
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        document.getElementById("conexao").textContent = "Sem conexão";
    }
}

// Atualiza a condição térmica
function atualizarEstado(estado) {
    const titulo = document.getElementById("estado");
    const mensagem = document.getElementById("mensagem");
    const indicador = document.getElementById("indicador");

    if (estado === 1) {
        titulo.textContent = "Frio excessivo";
        mensagem.textContent = "Recomendação: verificar as condições ambientais.";
        indicador.textContent = "FRIO";
    } else if (estado === 2) {
        titulo.textContent = "Calor excessivo";
        mensagem.textContent = "Recomendação: verificar a climatização da estação.";
        indicador.textContent = "CALOR";
    } else if (estado === 0) {
        titulo.textContent = "Operação normal";
        mensagem.textContent = "Condições térmicas dentro dos limites definidos.";
        indicador.textContent = "OK";
    } else {
        titulo.textContent = "Estado desconhecido";
        mensagem.textContent = "Verifique os dados recebidos do dispositivo.";
        indicador.textContent = "--";
    }
}

// Cria e atualiza o gráfico
function atualizarGrafico(leituras) {
    const validas = leituras.filter(item =>
        item.field1 !== null && item.field2 !== null
    );

    const labels = validas.map(item =>
        new Date(item.created_at).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        })
    );

    const temperaturas = validas.map(item => Number(item.field1));
    const umidades = validas.map(item => Number(item.field2));

    if (!grafico) {
        const contexto = document.getElementById("grafico");

        grafico = new Chart(contexto, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        label: "Temperatura (°C)",
                        data: temperaturas,
                        borderColor: "#b5f550",
                        backgroundColor: "#b5f55018",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 2,
                        borderWidth: 2,
                        yAxisID: "y"
                    },
                    {
                        label: "Umidade (%)",
                        data: umidades,
                        borderColor: "#50b9e8",
                        backgroundColor: "transparent",
                        tension: 0.4,
                        pointRadius: 2,
                        borderWidth: 2,
                        yAxisID: "y1"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: "index"
                },
                plugins: {
                    legend: {
                        labels: {
                            color: "#aab5ad",
                            usePointStyle: true,
                            boxWidth: 7,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#89948c" },
                        grid: { color: "#202a23" }
                    },
                    y: {
                        position: "left",
                        ticks: { color: "#b5f550" },
                        grid: { color: "#202a23" }
                    },
                    y1: {
                        position: "right",
                        min: 0,
                        max: 100,
                        ticks: { color: "#50b9e8" },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        });
    } else {
        grafico.data.labels = labels;
        grafico.data.datasets[0].data = temperaturas;
        grafico.data.datasets[1].data = umidades;
        grafico.update();
    }
}

// Atualização inicial e automática
buscarDados();
setInterval(buscarDados, 20000);
