import { Selector } from 'testcafe';

fixture`Home page`.page`http://localhost:8080`;

test('WC Test - Should display the WC', async t => {
    await t.wait(20000); // Await async resources loaded...
    await t
        .wait(1000)
        .expect(Selector('body').find('nova-badge').exists)
        .ok();
});
