interface ImportMetaEnv {
  /** Endpoint form kontak (mis. Formspree). Kosong = form membuka aplikasi email. */
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
