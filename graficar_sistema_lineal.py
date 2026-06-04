import pandas as pd
import matplotlib.pyplot as plt

# =====================================
# LEER DATOS
# =====================================

df = pd.read_csv("sistema_lineal.csv")

# =====================================
# FIGURA 1
# x(t)
# =====================================

plt.figure(figsize=(8,5))

plt.plot(
    df["t"],
    df["x_analitica"],
    "b-",
    linewidth=2,
    label="Analítica"
)

plt.plot(
    df["t"],
    df["x_heun"],
    "r--s",
    markersize=5,
    label="Heun"
)

plt.plot(
    df["t"],
    df["x_rk4"],
    "g--o",
    markersize=5,
    label="RK4"
)

plt.xlabel("Tiempo")
plt.ylabel("x(t)")
plt.title("Componente x(t)")
plt.grid(True, alpha=0.3)
plt.legend()

plt.tight_layout()
plt.savefig("sistema_lineal_x.png", dpi=300)
plt.close()

# =====================================
# FIGURA 2
# y(t)
# =====================================

plt.figure(figsize=(8,5))

plt.plot(
    df["t"],
    df["y_analitica"],
    "b-",
    linewidth=2,
    label="Analítica"
)

plt.plot(
    df["t"],
    df["y_heun"],
    "r--s",
    markersize=5,
    label="Heun"
)

plt.plot(
    df["t"],
    df["y_rk4"],
    "g--o",
    markersize=5,
    label="RK4"
)

plt.xlabel("Tiempo")
plt.ylabel("y(t)")
plt.title("Componente y(t)")
plt.grid(True, alpha=0.3)
plt.legend()

plt.tight_layout()
plt.savefig("sistema_lineal_y.png", dpi=300)
plt.close()

# =====================================
# FIGURA 3
# PLANO DE FASE
# =====================================

plt.figure(figsize=(8,5))

plt.plot(
    df["x_analitica"],
    df["y_analitica"],
    "b-",
    linewidth=2,
    label="Analítica"
)

plt.plot(
    df["x_heun"],
    df["y_heun"],
    "r--s",
    markersize=5,
    label="Heun"
)

plt.plot(
    df["x_rk4"],
    df["y_rk4"],
    "g--o",
    markersize=5,
    label="RK4"
)

plt.xlabel("x(t)")
plt.ylabel("y(t)")
plt.title("Plano de Fase")
plt.grid(True, alpha=0.3)
plt.legend()

plt.tight_layout()
plt.savefig("sistema_lineal_fase.png", dpi=300)
plt.close()

# =====================================
# FIGURA 4
# ERROR VS TIEMPO
# =====================================

error_heun = abs(
    df["x_analitica"]
    - df["x_heun"]
)

error_rk4 = abs(
    df["x_analitica"]
    - df["x_rk4"]
)

plt.figure(figsize=(8,5))

plt.plot(
    df["t"],
    error_heun,
    "r--s",
    markersize=5,
    label="Error Heun"
)

plt.plot(
    df["t"],
    error_rk4,
    "g--o",
    markersize=5,
    label="Error RK4"
)

plt.xlabel("Tiempo")
plt.ylabel("Error")
plt.title("Error de Aproximación en x(t)")
plt.grid(True, alpha=0.3)
plt.legend()

plt.tight_layout()
plt.savefig("sistema_lineal_error.png", dpi=300)
plt.close()

print("Gráficas del sistema lineal generadas.")