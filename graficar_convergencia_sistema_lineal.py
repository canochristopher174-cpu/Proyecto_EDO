import numpy as np
import matplotlib.pyplot as plt

# =====================================
# DATOS
# =====================================

h = np.array([
    0.50,
    0.20,
    0.10,
    0.05
])

# =====================================
# HEUN
# =====================================

error_x_heun = np.array([
    2.790608,
    2.233404,
    0.426403,
    0.130554
])

error_y_heun = np.array([
    2.766886,
    2.227133,
    0.425128,
    0.130223
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_x_heun,
    "bo-",
    label="Error máximo en x"
)

plt.loglog(
    h,
    error_y_heun,
    "rs-",
    label="Error máximo en y"
)

plt.title(
    "Convergencia Sistema Lineal 2x2 - Método Heun"
)

plt.xlabel("h")
plt.ylabel("Error máximo")

plt.grid(True, which="both", alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_lineal_heun.png",
    dpi=300
)

plt.close()

# =====================================
# RK4
# =====================================

error_x_rk4 = np.array([
    0.663003,
    0.109868,
    0.005241,
    0.000403
])

error_y_rk4 = np.array([
    0.662720,
    0.109856,
    0.005240,
    0.000403
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_x_rk4,
    "bo-",
    label="Error máximo en x"
)

plt.loglog(
    h,
    error_y_rk4,
    "rs-",
    label="Error máximo en y"
)

plt.title(
    "Convergencia Sistema Lineal 2x2 - Método RK4"
)

plt.xlabel("h")
plt.ylabel("Error máximo")

plt.grid(True, which="both", alpha=0.3)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_lineal_rk4.png",
    dpi=300
)

plt.close()

print("Gráficas generadas.")