import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# =====================================
# DATOS TEMPORALES
# =====================================

df = pd.read_csv("sistema_no_lineal.csv")

# =====================================
# FIGURA 1
# EVOLUCIÓN TEMPORAL
# =====================================

plt.figure(figsize=(10,5))

plt.plot(
    df["t"],
    df["x_heun"],
    "r-",
    label="Presas (Heun)"
)

plt.plot(
    df["t"],
    df["y_heun"],
    "r--",
    label="Depredadores (Heun)"
)

plt.plot(
    df["t"],
    df["x_rk4"],
    "b-",
    label="Presas (RK4)"
)

plt.plot(
    df["t"],
    df["y_rk4"],
    "b--",
    label="Depredadores (RK4)"
)

plt.title(
    "Sistema No Lineal - Evolución Temporal"
)

plt.xlabel("Tiempo")
plt.ylabel("Población")

plt.grid(True, alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "sistema_no_lineal_temporal.png",
    dpi=300
)

plt.close()

# =====================================
# FIGURA 2
# PLANO DE FASE
# =====================================

plt.figure(figsize=(10,5))

plt.plot(
    df["x_heun"],
    df["y_heun"],
    "r-",
    label="Heun"
)

plt.plot(
    df["x_rk4"],
    df["y_rk4"],
    "b-",
    label="RK4"
)

plt.title(
    "Plano de Fase"
)

plt.xlabel("Presas")
plt.ylabel("Depredadores")

plt.grid(True, alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "sistema_no_lineal_fase.png",
    dpi=300
)

plt.close()

# =====================================
# FIGURA 3
# CONVERGENCIA PRESAS (x)
# =====================================

h = np.array([
    0.50,
    0.20,
    0.10,
    0.05
])

error_heun_x = np.array([
    0.023274,
    0.004073,
    0.001048,
    0.000266
])

error_rk4_x = np.array([
    0.0000565,
    0.00000145,
    0.000000086,
    0.000000005
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_heun_x,
    "ro-",
    label="Heun"
)

plt.loglog(
    h,
    error_rk4_x,
    "bo-",
    label="RK4"
)

plt.title(
    "Convergencia Aproximada - Presas (x)"
)

plt.xlabel("h")
plt.ylabel("Error")

plt.grid(True, which="both", alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_no_lineal_x.png",
    dpi=300
)

plt.close()

# =====================================
# FIGURA 4
# CONVERGENCIA DEPREDADORES (y)
# =====================================

error_heun_y = np.array([
    0.022082,
    0.003597,
    0.000944,
    0.000245
])

error_rk4_y = np.array([
    0.000742,
    0.0000231,
    0.00000155,
    0.00000010
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_heun_y,
    "ro-",
    label="Heun"
)

plt.loglog(
    h,
    error_rk4_y,
    "bo-",
    label="RK4"
)

plt.title(
    "Convergencia Aproximada - Depredadores (y)"
)

plt.xlabel("h")
plt.ylabel("Error")

plt.grid(True, which="both", alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_no_lineal_y.png",
    dpi=300
)

plt.close()

print("Gráficas del sistema no lineal generadas.")