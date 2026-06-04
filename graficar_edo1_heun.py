import pandas as pd
import matplotlib.pyplot as plt

archivos = [
    ("edo1_heun_h050.csv", "0.50"),
    ("edo1_heun_h020.csv", "0.20"),
    ("edo1_heun_h010.csv", "0.10"),
    ("edo1_heun_h005.csv", "0.05")
]

for archivo, h in archivos:

    df = pd.read_csv(archivo)

    error_max = (
        abs(
            df["Analitica"]
            - df["Heun"]
        )
    ).max()

    plt.figure(figsize=(8, 5))

    plt.plot(
        df["t"],
        df["Analitica"],
        "b-",
        linewidth=2,
        label="Analítica"
    )

    plt.plot(
        df["t"],
        df["Heun"],
        "r--s",
        markersize=5,
        label=f"Heun (h={h})"
    )

    plt.title(
        f"h = {h}, Error max = {error_max:.6f}"
    )

    plt.xlabel("Tiempo")
    plt.ylabel("y(t)")

    plt.grid(True, alpha=0.3)

    plt.legend()

    plt.tight_layout()

    plt.savefig(
        f"heun_h_{h.replace('.', '')}.png",
        dpi=300
    )

    plt.close()

print("Gráficas generadas correctamente.")