const TicketForms = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Start a New Service Ticket or Check an Existing One
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Welcome! Start a new repair ticket or look up your existing ticket status.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* New Ticket Form */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Start a New Service Ticket
            </h3>
            <form
              action="https://wefixitcrm.flm380.com/check_ins/ticket_info"
              method="GET"
              className="space-y-4"
            >
              <div>
                <label htmlFor="new-name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="new-name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="new-phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="new-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="device-type" className="block text-sm font-medium mb-2">
                  Device Type *
                </label>
                <select
                  id="device-type"
                  name="device_type"
                  required
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select device type</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Samsung/Android">Samsung/Android</option>
                  <option value="iPad/Tablet">iPad/Tablet</option>
                  <option value="Laptop/Computer">Laptop/Computer</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Start New Ticket
              </button>
            </form>
          </div>

          {/* Existing Ticket Lookup */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Existing Ticket Lookup
            </h3>
            <form
              action="https://wefixitcrm.flm380.com/check_ins/check_existing"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="ticket-number" className="block text-sm font-medium mb-2">
                  Ticket Number *
                </label>
                <input
                  type="text"
                  id="ticket-number"
                  name="ticket_number"
                  required
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., #12345"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  required
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Check Ticket Status
                </button>
              </div>

              <p className="text-sm text-muted-foreground text-center pt-2">
                Lost your ticket number? Call us at 347-450-7344
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketForms;
