export default function Index() {
  return (
    <s-page heading="Ali Announcement Bar">
      {/* INTRO SECTION */}
      <s-section>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
  src="/assets/APP-ICON.png"
  alt="Ali Announcement Bar logo"
  width="48"
  height="48"
/>


          <div>
            <h2 style={{ margin: 0 }}>Ali Announcement Bar</h2>
            <p style={{ margin: "4px 0", color: "#6d7175" }}>
              A simple way to display announcements, offers, and important
              messages on your storefront.
            </p>
          </div>
        </div>
      </s-section>

      {/* MAIN INFO */}
      <s-section heading="What this app does">
        <s-paragraph>
          Ali Announcement Bar helps you highlight important messages like
          discounts, shipping updates, and promotions at the top of your store.
        </s-paragraph>

        <s-paragraph>
          You can customize the announcement text, colors, and visibility —
          without touching your theme code.
        </s-paragraph>
      </s-section>

      {/* GET STARTED */}
      <s-section heading="Get started">
        <s-paragraph>
          To start using the announcement bar:
        </s-paragraph>

        <s-unordered-list>
          <s-list-item>
            Go to <strong>Online Store → Themes → Customize</strong>
          </s-list-item>
          <s-list-item>
            Open the <strong>Header</strong> section
          </s-list-item>
          <s-list-item>
            Click <strong>Add block → Apps → Announcement Bar</strong>
          </s-list-item>
        </s-unordered-list>
      </s-section>

      {/* ASIDE / SUPPORT */}
      <s-section slot="aside" heading="Need help?">
        <s-paragraph>
          If you need assistance or have questions, we’re here to help.
        </s-paragraph>

        <s-button
          href="mailto:support@example.com"
          target="_blank"
        >
          Contact Support
        </s-button>

        <br /><br />

        <s-button
          href="https://www.socialcroww.com/"
          target="_blank"
          variant="secondary"
        >
          Visit Company Website
        </s-button>
      </s-section>
    </s-page>
  );
}
