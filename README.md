# 🇧🇷 SolidSign API - Caso de Uso: eSocial — Node.js (Fastify)

Este projeto demonstra a integração com a **SolidSign API** para assinar eventos do **eSocial** (S-1000, S-2200 e qualquer outro evento S-xxxx): uma assinatura XML única sobre o envelope inteiro, com o certificado e-CPF/e-CNPJ do empregador, via KMS SolidSign. Usa `fetch`/`FormData` nativos do Node.js 18+ e Fastify.

## Endpoint

`POST /api/esocial/sign-evento` — recebe o XML do evento (`document`) e o `kmsCode` do empregador, retorna o XML assinado.

## Parâmetros de assinatura (fixos, iguais pra qualquer evento)

`profile=XML_INTERNATIONAL`, `signaturePackaging=ENVELOPED`, `hashAlgorithm=SHA256`, `canonicalizationMethod=INCLUSIVE`, `isRemoveXPathExclusionFilter=true`, `isRemoveNamespacePrefixFromNodeNames=true`.

## Stack
1. Node.js 18+
2. Fastify + @fastify/multipart

## Como Executar

```bash
npm install
cp .env.example .env   # edite com seu token
npm start
```

```
curl -X POST http://localhost:3097/api/esocial/sign-evento \
  -F "document=@evento-s1000.xml" -F "kmsCode=$KMS_EMPREGADOR" \
  -o evento-s1000-assinado.xml
```

## Outros métodos de certificação

Para HSM em nuvem ou navegador (PKCS#1), use os mesmos parâmetros nos exemplos genéricos [`exemplo-nodejs-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-cloud) e [`exemplo-nodejs-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-pkcs1).

## Tratamento de Erros
O sistema loga o JSON detalhado de erro da SolidSign.

---

# 🇬🇧 SolidSign API - Use Case: eSocial — Node.js (Fastify)

This project demonstrates integrating with the **SolidSign API** to sign **eSocial** events (S-1000, S-2200, and any other S-xxxx event): a single XML signature over the entire envelope, with the employer's e-CPF/e-CNPJ certificate, via SolidSign's KMS. Uses native Node.js 18+ `fetch`/`FormData` and Fastify.

## Endpoint

`POST /api/esocial/sign-evento` — takes the event's XML (`document`) and the employer's `kmsCode`, returns the signed XML.

## Signature parameters (fixed, the same for any event)

`profile=XML_INTERNATIONAL`, `signaturePackaging=ENVELOPED`, `hashAlgorithm=SHA256`, `canonicalizationMethod=INCLUSIVE`, `isRemoveXPathExclusionFilter=true`, `isRemoveNamespacePrefixFromNodeNames=true`.

## Stack
1. Node.js 18+
2. Fastify + @fastify/multipart

## How to Run

```bash
npm install
cp .env.example .env
npm start
```

## Other certification methods

For cloud HSM or browser (PKCS#1) signing, apply the same parameters to [`exemplo-nodejs-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-cloud) and [`exemplo-nodejs-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-pkcs1).

## Error Handling
The system logs SolidSign's detailed error JSON.

---

# 🇪🇸 SolidSign API - Caso de Uso: eSocial — Node.js (Fastify)

Este proyecto demuestra la integración con la **SolidSign API** para firmar eventos del **eSocial** (S-1000, S-2200 y cualquier otro evento S-xxxx): una única firma XML sobre el envelope entero, con el certificado e-CPF/e-CNPJ del empleador, vía KMS. Usa `fetch`/`FormData` nativos de Node.js 18+ y Fastify.

## Endpoint

`POST /api/esocial/sign-evento` — recibe el XML del evento (`document`) y el `kmsCode` del empleador, devuelve el XML firmado.

## Parámetros de firma (fijos, iguales para cualquier evento)

`profile=XML_INTERNATIONAL`, `signaturePackaging=ENVELOPED`, `hashAlgorithm=SHA256`, `canonicalizationMethod=INCLUSIVE`, `isRemoveXPathExclusionFilter=true`, `isRemoveNamespacePrefixFromNodeNames=true`.

## Stack
1. Node.js 18+
2. Fastify + @fastify/multipart

## Cómo Ejecutar

```bash
npm install
cp .env.example .env
npm start
```

## Otros métodos de certificación

Para HSM en la nube o navegador (PKCS#1), aplique los mismos parámetros a [`exemplo-nodejs-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-cloud) y [`exemplo-nodejs-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-xml-pkcs1).

## Gestión de Errores
El sistema registra el JSON detallado de errores de SolidSign.
