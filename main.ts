import { ItemView, WorkspaceLeaf } from "obsidian";
import Test from "./svelte/Test.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
	testComponent!: Test;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {

		this.testComponent = new Test({
			target: this.contentEl,
			props: {
				variable: 1
			}
		});
	}

	async onClose() {
		this.testComponent.$destroy();
	}
}
