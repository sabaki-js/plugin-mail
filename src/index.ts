/**
 * @sabaki-js/mail - sabaki plugin for the `mail` domain.
 *
 * Bundled `nano` mode (TF-IDF weights, <1 ms, zero dependencies).
 * Ask another question with `input.question` (see `manifest.questions`).
 */
import {
	predict,
	type ClassifyOutput,
	type ModelWeights,
	type PluginManifest,
	type SabakiInput,
	type SabakiPlugin,
} from "sabaki";
import manifestData from "./manifest.json" with { type: "json" };
import weightsData from "./weights.json" with { type: "json" };

const manifest = manifestData as PluginManifest;
const weights = weightsData as ModelWeights;
const PRIMARY = "bucket";

function classify(input: SabakiInput): ClassifyOutput {
	const q =
		input.question && weights.questions[input.question]
			? input.question
			: PRIMARY;
	const from = typeof input.from === "string" ? (input.from as string) : "";
	const r = predict(`${from} ${input.state}`, weights, q);
	return {
		decision: r.decision,
		confidence: r.confidence,
		domain: manifest.domain,
	};
}

const plugin: SabakiPlugin = { manifest, classify };
export default plugin;
