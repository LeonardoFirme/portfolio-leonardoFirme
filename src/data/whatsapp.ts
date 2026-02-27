/*
* file: src/data/whatsapp.ts
* description: Utilitário para detecção de dispositivo e redirecionamento dinâmico para WhatsApp.
* author: Leonardo Firme
* version: 1.0.0
*/

/**
 * Abre o WhatsApp com uma mensagem pré-definida baseada no dispositivo do usuário.
 * @param phone Número de telefone no formato internacional (ex: 5551997421833)
 * @param message Mensagem codificada para a URL
 */

export const openWhatsApp = (phone: string = "5551997421833", message: string = "Olá Leonardo, visualizei seu portfólio e gostaria de conversar sobre um projeto."): void => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const baseUrl = isMobile
    ? `https://api.whatsapp.com/send`
    : `https://web.whatsapp.com/send`;

  const url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
};