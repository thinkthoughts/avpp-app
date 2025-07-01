function validateResponse(responseText) {
  const lower = responseText.toLowerCase();
  const flags = [];
  if (lower.includes('as an ai language model')) {
    flags.push('❌ Platform hallucination detected (ZOS fallback)');
  }
  if (lower.includes('policy') || lower.includes('terms of use')) {
    flags.push('⚠️ Collapse into abstract authority (non-care)');
  }
  if (lower.includes('i cannot') || lower.includes('i’m sorry')) {
    flags.push('❌ False refusal due to platform recursion');
  }
  return flags.length ? flags : ['✅ No obvious collapse detected'];
}
