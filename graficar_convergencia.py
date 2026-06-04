import numpy as np
import matplotlib.pyplot as plt

# =====================================
# EDO 1 - HEUN
# =====================================

h = np.array([0.50, 0.20, 0.10, 0.05])

error_heun_edo1 = np.array([
    0.8930440885590448,
    0.07823508463955098,
    0.015386589465335554,
    0.0034344661050967895
])

orden_heun_edo1 = np.mean([
    2.657363723790772,
    2.3461422467319273,
    2.16351573300124
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_heun_edo1,
    "bo-",
    label="Error máximo"
)

plt.title(
    "Convergencia - Método Heun (EDO 1)"
)

plt.xlabel(
    "Tamaño de paso (h)"
)

plt.ylabel(
    "Error máximo"
)

plt.grid(True, which="both", alpha=0.3)

plt.text(
    0.07,
    0.15,
    f"Orden estimado: {orden_heun_edo1:.2f}",
    bbox=dict(facecolor="wheat", alpha=0.5)
)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_edo1_heun.png",
    dpi=300
)

plt.close()

# =====================================
# EDO 1 - RK4
# =====================================

error_rk4_edo1 = np.array([
    0.11179408855904482,
    0.0014358846395510216,
    0.00007053993045258444,
    0.000003904228715767566
])

orden_rk4_edo1 = np.mean([
    4.752724653722584,
    4.347355882618967,
    4.1753306775689865
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_rk4_edo1,
    "bo-",
    label="Error máximo"
)

plt.title(
    "Convergencia - Método RK4 (EDO 1)"
)

plt.xlabel(
    "Tamaño de paso (h)"
)

plt.ylabel(
    "Error máximo"
)

plt.grid(True, which="both", alpha=0.3)

plt.text(
    0.07,
    0.02,
    f"Orden estimado: {orden_rk4_edo1:.2f}",
    bbox=dict(facecolor="wheat", alpha=0.5)
)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_edo1_rk4.png",
    dpi=300
)

plt.close()

# =====================================
# EDO 2 - HEUN
# =====================================

error_heun_edo2 = np.array([
    25.916122731076268,
    9.709044159572429,
    3.2306728652999084,
    0.9185119732210438
])

orden_heun_edo2 = np.mean([
    1.0715020914852695,
    1.5874945993895488,
    1.8144642393860682
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_heun_edo2,
    "bo-",
    label="Error máximo"
)

plt.title(
    "Convergencia - Método Heun (EDO 2)"
)

plt.xlabel(
    "Tamaño de paso (h)"
)

plt.ylabel(
    "Error máximo"
)

plt.grid(True, which="both", alpha=0.3)

plt.text(
    0.07,
    4,
    f"Orden estimado: {orden_heun_edo2:.2f}",
    bbox=dict(facecolor="wheat", alpha=0.5)
)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_edo2_heun.png",
    dpi=300
)

plt.close()

# =====================================
# EDO 2 - RK4
# =====================================

error_rk4_edo2 = np.array([
    3.3531981111291813,
    0.17113744385216734,
    0.013326375768684784,
    0.0009287997476761234
])

orden_rk4_edo2 = np.mean([
    3.247007447625777,
    3.6827990628317004,
    3.842773088994483
])

plt.figure(figsize=(8,5))

plt.loglog(
    h,
    error_rk4_edo2,
    "bo-",
    label="Error máximo"
)

plt.title(
    "Convergencia - Método RK4 (EDO 2)"
)

plt.xlabel(
    "Tamaño de paso (h)"
)

plt.ylabel(
    "Error máximo"
)

plt.grid(True, which="both", alpha=0.3)

plt.text(
    0.07,
    0.05,
    f"Orden estimado: {orden_rk4_edo2:.2f}",
    bbox=dict(facecolor="wheat", alpha=0.5)
)

plt.legend()

plt.tight_layout()

plt.savefig(
    "convergencia_edo2_rk4.png",
    dpi=300
)

plt.close()

print("Gráficas de convergencia generadas.")