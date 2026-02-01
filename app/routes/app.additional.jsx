export default function AdditionalPage() {
  return (
    <s-page heading="Announcement Bar">
      <s-section heading="Settings">
        <s-paragraph>
          Configure your store announcement bar text.
        </s-paragraph>

        <s-text-field
          label="Announcement text"
          value="Welcome to our store!"
        ></s-text-field>

        <br />

        <s-button variant="primary">
          Save
        </s-button>
      </s-section>

      <s-section slot="aside" heading="Help">
        <s-paragraph>
          This announcement bar will appear on your storefront.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
