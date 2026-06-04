import pandas as pd
import matplotlib.pyplot as plt

archivos = [
    ("edo2_rk4_h050.csv", "0.50"),
    ("edo2_rk4_h020.csv", "0.20"),
    ("edo2_rk4_h010.csv", "0.10"),
    ("edo2_rk4_h005.csv", "0.05")
]

for archivo, h in archivos:

    df = pd.read_csv(archivo)

    error_max = (
        abs(
            df["Analitica"]
            - df["RK4"]
        )
    ).max()

    plt.figure(figsize=(10,6))

    plt.plot(
        df["t"],
        df["Analitica"],
        color="blue",
        linewidth=2,
        label="Analítica"
    )

    plt.plot(
        df["t"],
        df["RK4"],
        "r--s",
        markersize=6,
        label=f"RK4 (h={h})"
    )

    plt.title(
        f"h = {h}, Error max = {error_max:.6f}",
        fontsize=18
    )

    plt.xlabel("Tiempo")
    plt.ylabel("y(t)")

    plt.grid(True, alpha=0.3)

    plt.legend()

    plt.tight_layout()

    plt.savefig(
        f"edo2_rk4_h_{h.replace('.', '')}.png",
        dpi=300
    )

    plt.close()

print("Gráficas EDO2-RK4 generadas.")