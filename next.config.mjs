/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Deshabilitar ESLint durante las builds, evaluar como habilitar y corregir tipados al final
  },
};

export default nextConfig;
