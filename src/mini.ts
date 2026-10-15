import {
	loadMini,
	type ClassifyOutput,
	type MiniModel,
	type SabakiInput,
} from "sabaki";

let cached: MiniModel | null = null;
/** Charge le mode mini (poids ONNX v0.5.0). `from` préfixé comme le nano. */
export async function loadMiniClassifier(
	modelDir: string,
): Promise<(input: SabakiInput) => Promise<ClassifyOutput>> {
	cached ??= await loadMini(modelDir);
	const mini = cached;
	return async (input: SabakiInput) => {
		const q = input.question ?? "bucket";
		const from = typeof input.from === "string" ? `${input.from} ` : "";
		const r = await mini.run(`${from}${input.state}`, q);
		return {
			decision: r.decision,
			confidence: r.confidence,
			domain: "mail",
		};
	};
}
