//Crear una funcion que se le pase un String como parametro y lo encripte.
//Añadir 1 funcion inversa que una cadena de texto encriptada la desencripte.
//Nota: Buscar alguna libreria que permita generar cadenas de foma segura.
//@autor: Luis CC.
//Investigacion: Buscar 2 librerias que sirvvan para encriptar y para que es.
//He encontrado --> Node.js Crypto y Crypto.js
//He usado Crypto-js

/*
import CryptoJS from "crypto-js"

  Recibe: String
  Devuelve: texto_cifrado

const clave:string = "Que guay soy y que buenos alumnos tengo"

function encriptar(texto:string):string {
textoEncriptado: string = CryptoJS.AES.encrypt(texto,clave).toString()
return textoEncriptado
}

function desencriptar(text:string):string{
  const textoCasiDesencriptado : string= CryptoJS.AES.decrypt(texto,clave)
  const textoOriginal: string = textoCasiDesencriptado.toString(CryptoJS.enc.Utf8)
  return textoOriginal
}

export function ejecutar ejecutarEjercicio2(): void {
  const mensaje: string = "Hola Mundo"
  //encriptamos:
  const mensajeEncriptado: sting = encriptar(mensaje)
  console.log("Mensaje encriptado: ",mensajeEncriptado)
  console.log(`El mensaje ${mensaje} encriptado se conviernte en ${mensajeEncriptado}, y al desencriptar se convierte en ${desencriptar(mensajeEncriptado)}`)
}
*/
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

const clave = scryptSync("Que guay soy y que buenos alumnos tengo", 'salt-fijo', 32);

function encriptar(texto: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', clave, iv);
  const textoEncriptado = cipher.update(texto, 'utf8', 'hex') + cipher.final('hex');
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${textoEncriptado}`;
}

function desencriptar(textoCifradoCompleto: string): string {
  const [ivHex, tagHex, textoCifrado] = textoCifradoCompleto.split(':');
  const decipher = createDecipheriv('aes-256-gcm', clave, Buffer.from(ivHex, 'hex'));
  decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
  return decipher.update(textoCifrado, 'hex', 'utf8') + decipher.final('utf8');
}

export function ejecutarEjercicio2(): void {
  const mensaje: string = "Hola Mundo";
  const mensajeEncriptado: string = encriptar(mensaje);
  console.log("Mensaje encriptado: ", mensajeEncriptado);
  console.log(`El mensaje ${mensaje} encriptado se conviernte en ${mensajeEncriptado}, y al desencriptar se convierte en ${desencriptar(mensajeEncriptado)}`);
}
