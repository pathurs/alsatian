import "reflect-metadata";
import { IgnoreTests as IgnoreTestsDecorator } from "../../../core/decorators/ignore-tests-decorator";
import { Expect, Test, TestCase } from "../../../core/alsatian-core";

export class IgnoreTestsDecoratorTests {

    @Test()
    public focusTestKeyMetaDataAdded(key: string) {
        let ignoreTestsDecorator = IgnoreTestsDecorator();
        let TestFixture = () => {};

        ignoreTestsDecorator(TestFixture);
        Expect(Reflect.getMetadata("alsatian:ignore", TestFixture)).toBe(true);
    }
}
